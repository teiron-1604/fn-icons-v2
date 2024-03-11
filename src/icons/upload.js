import React from 'react';
import PropTypes from 'prop-types';

const Upload = props => {
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
      <path d="M3 19h18v2H3v-2zM13 5.828V17h-2V5.828L4.929 11.9l-1.414-1.414L12 2l8.485 8.485-1.414 1.414L13 5.83v-.002z"></path>
    </svg>
  );
};

Upload.propTypes = {
  color: PropTypes.string
};

Upload.defaultProps = {
  color: 'currentColor'
};

export default Upload;
