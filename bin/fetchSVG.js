const got = require('got')
const { ensureDir, writeFile } = require('fs-extra')
const { join, resolve } = require('path')
const Figma = require('figma-js')
const PQueue = require('p-queue')
require('dotenv').config()
const { FIGMA_TOKEN, FIGMA_FILE_URL } = process.env

const options = {
  format: 'svg',
  outputDir: './src/',
  scale: '1',
}

for (const arg of process.argv.slice(2)) {
  const [param, value] = arg.split('=')
  if (options[param]) {
    options[param] = value
  }
}

if (!FIGMA_TOKEN) {
  throw Error('Cannot find FIGMA_TOKEN in process!')
}

const client = Figma.Client({
  personalAccessToken: FIGMA_TOKEN,
})

// Fail if there's no figma file key
let fileId = null
if (!fileId) {
  try {
    fileId = FIGMA_FILE_URL.match(/file\/([a-z0-9]+)\//i)[1]
  } catch (e) {
    throw Error('Cannot find FIGMA_FILE_URL key in process!')
  }
}

console.log(`Exporting ${FIGMA_FILE_URL} components`)
client
  .file(fileId)
  .then(({ data }) => {
    console.log('Processing response')
    const components = {}

    function check(c) {
      if (c.type === 'COMPONENT') {
        const { name, id } = c
        const { description = '', key } = data.components[c.id]
        const { width, height } = c.absoluteBoundingBox

        components[id] = {
          name,
          id,
          key,
          file: fileId,
          description,
          width,
          height,
        }
      } else if (c.children) {
        // eslint-disable-next-line github/array-foreach
        c.children.forEach(check)
      }
    }

    data.document.children.forEach(check)
    if (Object.values(components).length === 0) {
      throw Error('No components found!')
    }
    console.log(
      `${Object.values(components).length} components found in the figma file`
    )
    return components
  })
  .then((components) => {
    console.log('Getting export urls')
    const ids = Object.keys(components)
    const batchSize = 50 // 减少批次大小到50个
    const batches = []
    for (let i = 0; i < ids.length; i += batchSize) {
      batches.push(ids.slice(i, i + batchSize))
    }

    console.log(
      `Split into ${batches.length} batches of ${batchSize} components each`
    )

    // 并发控制，防止太快
    const delay = (ms) => new Promise((res) => setTimeout(res, ms))

    return (async () => {
      for (let i = 0; i < batches.length; i++) {
        const batch = batches[i]
        console.log(
          `Processing batch ${i + 1}/${batches.length} (${
            batch.length
          } components)`
        )

        try {
          const { data } = await Promise.race([
            client.fileImages(fileId, {
              format: options.format,
              ids: batch,
              scale: options.scale,
            }),
            new Promise((_, reject) =>
              setTimeout(() => reject(new Error('Request timeout')), 30000)
            ),
          ])

          for (const id of Object.keys(data.images)) {
            components[id].image = data.images[id]
          }

          console.log(`Batch ${i + 1} completed successfully`)

          if (i < batches.length - 1) {
            console.log('Waiting 1 second before next batch...')
            await delay(1000) // 增加延迟到1秒
          }
        } catch (error) {
          console.error(`Error in batch ${i + 1}:`, error.message)
          console.log('Retrying batch in 5 seconds...')
          await delay(5000)
          i-- // 重试当前批次
        }
      }
      console.log('All batches completed, returning components...')
      return components
    })()
  })
  .then((components) => {
    console.log('Writing data.json file...')
    return ensureDir(join(options.outputDir))
      .then(() =>
        writeFile(
          resolve(options.outputDir, 'data.json'),
          JSON.stringify(components),
          'utf8'
        )
      )
      .then(() => {
        console.log('data.json written successfully')
        return components
      })
  })
  .then((components) => {
    console.log('Starting to download SVG files...')
    const contentTypes = {
      svg: 'image/svg+xml',
      png: 'image/png',
      jpg: 'image/jpeg',
    }
    const allComponents = Object.values(components)
    let finished = 0

    return queueTasks(
      allComponents.map((component, idx) => async () => {
        try {
          // 超时控制
          const response = await Promise.race([
            got.get(component.image, {
              headers: {
                'Content-Type': contentTypes[options.format],
              },
              encoding: options.format === 'svg' ? 'utf8' : null,
              timeout: { request: 20000 }, // 20秒超时
            }),
            new Promise((_, reject) =>
              setTimeout(() => reject(new Error('Download timeout')), 25000)
            ),
          ])
          await ensureDir(join(options.outputDir, options.format))
          await writeFile(
            join(
              options.outputDir,
              options.format,
              `${component.name}.${options.format}`
            ),
            response.body,
            options.format === 'svg' ? 'utf8' : 'binary'
          )
          finished++
          if (finished % 20 === 0 || finished === allComponents.length) {
            console.log(`Downloaded ${finished}/${allComponents.length} files`)
          }
        } catch (err) {
          console.error(`Failed to download ${component.name}: ${err.message}`)
        }
      })
    )
  })
  .then(() => {
    console.log('All SVG files downloaded successfully!')
  })
  .catch((error) => {
    console.error('Error occurred:', error)
    throw Error(`Error fetching components from Figma: ${error}`)
  })

function queueTasks(tasks, options) {
  const queue = new PQueue(Object.assign({ concurrency: 3 }, options))
  for (const task of tasks) {
    queue.add(task)
  }
  queue.start()
  return queue.onIdle()
}
