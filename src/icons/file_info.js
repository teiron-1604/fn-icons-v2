import React from 'react';
import PropTypes from 'prop-types';

const FileInfo = props => {
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
      <path d="M15 4H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0120.007 22H3.993A1 1 0 013 21.008V2.992zM11 11h2v6h-2v-6zm0-4h2v2h-2V7z"></path>
    </svg>
  );
};

FileInfo.propTypes = {
  color: PropTypes.string
};

FileInfo.defaultProps = {
  color: 'currentColor'
};

export default FileInfo;
