import React from 'react';
import PropTypes from 'prop-types';

const FileCode = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M15 4H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0120.007 22H3.993A1 1 0 013 21.008V2.992zM17.657 12l-3.536 3.536-1.414-1.415L14.828 12l-2.12-2.121 1.413-1.415L17.657 12zM6.343 12L9.88 8.464l1.414 1.415L9.172 12l2.12 2.121-1.413 1.415L6.343 12z"></path>
    </svg>
  );
};

FileCode.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FileCode.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FileCode;
