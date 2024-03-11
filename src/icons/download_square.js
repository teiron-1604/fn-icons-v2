import React from 'react';
import PropTypes from 'prop-types';

const DownloadSquare = props => {
  const { color, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M20.538 16.838v3.201a.915.915 0 01-.288.68.963.963 0 01-.698.281H4.448a.962.962 0 01-.698-.28.915.915 0 01-.288-.68v-3.202c0-.267.096-.494.288-.68a.962.962 0 01.697-.28h3.65c.44 0 .816.294 1.114.62.1.11.214.21.342.3.338.24.716.36 1.133.36h2.627c.418 0 .796-.12 1.134-.36.128-.09.242-.19.342-.3.297-.326.673-.62 1.115-.62h3.648c.274 0 .507.093.698.28a.915.915 0 01.288.68z"></path>
      <path d="M16.463 8.122c.288 0 .49.134.606.4.116.26.068.49-.144.69l-4.597 4.483a.617.617 0 01-.462.19.617.617 0 01-.462-.19L6.807 9.213c-.212-.2-.26-.43-.143-.69.116-.267.318-.4.605-.4h2.627V3.64c0-.173.065-.323.195-.45a.64.64 0 01.462-.19h2.627a.64.64 0 01.461.19c.13.127.195.277.195.45v4.482h2.627z"></path>
    </svg>
  );
};

DownloadSquare.propTypes = {
  color: PropTypes.string
};

DownloadSquare.defaultProps = {
  color: 'currentColor'
};

export default DownloadSquare;
