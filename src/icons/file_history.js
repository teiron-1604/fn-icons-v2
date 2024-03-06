import React from 'react';
import PropTypes from 'prop-types';

const FileHistory = props => {
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
      <path d="M16 2l5 5v13.993A1 1 0 0120.007 22H3.993A1 1 0 013 21.008V2.992C3 2.444 3.447 2 3.999 2H16zm-1 2H5v16h14V8h-4V4zm-2 5v4h3v2h-5V9h2z"></path>
    </svg>
  );
};

FileHistory.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FileHistory.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FileHistory;
