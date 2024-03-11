import React from 'react';
import PropTypes from 'prop-types';

const FileTransfer = props => {
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
      <path d="M15 4H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0120.007 22H3.993A1 1 0 013 21.008V2.992zM12 11V8l4 4-4 4v-3H8v-2h4z"></path>
    </svg>
  );
};

FileTransfer.propTypes = {
  color: PropTypes.string
};

FileTransfer.defaultProps = {
  color: 'currentColor'
};

export default FileTransfer;
