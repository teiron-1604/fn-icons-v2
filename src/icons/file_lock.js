import React from 'react';
import PropTypes from 'prop-types';

const FileLock = props => {
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
      <path d="M15 4H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0120.007 22H3.993A1 1 0 013 21.008V2.992zM15 11h1v5H8v-5h1v-1a3 3 0 116 0v1zm-2 0v-1a1 1 0 00-2 0v1h2z"></path>
    </svg>
  );
};

FileLock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FileLock.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FileLock;
