import React from 'react';
import PropTypes from 'prop-types';

const UploadSquare = props => {
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
      <path d="M20.538 16.838v3.201a.915.915 0 01-.288.68.962.962 0 01-.698.281H4.448a.963.963 0 01-.698-.28.915.915 0 01-.288-.68v-3.202c0-.267.096-.494.288-.68a.962.962 0 01.698-.28h3.648c.442 0 .818.294 1.115.62.1.11.214.21.342.3.338.24.716.36 1.133.36h2.627c.418 0 .796-.12 1.134-.36.128-.09.242-.19.342-.3.297-.326.673-.62 1.115-.62h3.648c.274 0 .507.093.698.28a.915.915 0 01.288.68zm-3.47-8.475c-.116.266-.317.4-.605.4h-2.627v4.482a.608.608 0 01-.194.45.64.64 0 01-.462.19h-2.627a.64.64 0 01-.462-.19.608.608 0 01-.195-.45V8.763H7.27c-.287 0-.489-.134-.605-.4-.117-.26-.069-.49.143-.69l4.598-4.483a.617.617 0 01.461-.19c.185 0 .339.063.462.19l4.597 4.482c.212.2.26.43.144.69z"></path>
    </svg>
  );
};

UploadSquare.propTypes = {
  color: PropTypes.string
};

UploadSquare.defaultProps = {
  color: 'currentColor'
};

export default UploadSquare;
