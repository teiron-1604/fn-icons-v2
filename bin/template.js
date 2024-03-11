const getAttrs = (style, name) => {
  const baseAttrs = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '1em',
    height: '1em',
    viewBox: '0 0 24 24',
  }
  const fillAttrs = {
    fill: 'color',
    otherProps: '...otherProps'
  }
  const strokeAttrs = {
    fill: 'none',
    stroke: 'color',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    otherProps: '...otherProps'
  }
  if (name === 'loader') {
    fillAttrs.className = 'animate-spin'
    strokeAttrs.className = 'animate-spin'
  }
  return Object.assign({}, baseAttrs, style==='fill' ? fillAttrs : strokeAttrs)
}

const getElementCode = (ComponentName, attrs, svgCode) => `
  import React from 'react';
  import PropTypes from 'prop-types';

  const ${ComponentName} = (props) => {
    ${attrs.includes('className') ? "const { color, className=\"\", ...otherProps } = props;" : "const { color, ...otherProps } = props;"}
    return (
      <svg ${attrs}>
        ${svgCode}
      </svg>
    )
  };

  ${ComponentName}.propTypes = {
    color: PropTypes.string,
  }

  ${ComponentName}.defaultProps = {
    color: 'currentColor',
  }

  export default ${ComponentName}
`

module.exports = { getAttrs, getElementCode }
