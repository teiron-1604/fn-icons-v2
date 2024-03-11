import React from 'react';
import PropTypes from 'prop-types';

const Gift = props => {
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
      <path d="M15 2a4 4 0 013.464 6.001L23 8v2h-2v10a1 1 0 01-1 1H4a1 1 0 01-1-1V10H1V8l4.536.001A4 4 0 0112 3.355 3.983 3.983 0 0115 2zm-4 8H5v9h6v-9zm8 0h-6v9h6v-9zM9 4a2 2 0 00-.15 3.995L9 8h2V6a2 2 0 00-1.697-1.977l-.154-.018L9 4zm6 0a2 2 0 00-1.995 1.85L13 6v2h2a2 2 0 001.995-1.85L17 6a2 2 0 00-2-2z"></path>
    </svg>
  );
};

Gift.propTypes = {
  color: PropTypes.string
};

Gift.defaultProps = {
  color: 'currentColor'
};

export default Gift;
