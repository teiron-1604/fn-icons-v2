import React from 'react';
import PropTypes from 'prop-types';

const FileUser = props => {
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
      <path d="M15 4H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0120.007 22H3.993A1 1 0 013 21.008V2.992zm9 8.508a2.5 2.5 0 110-5 2.5 2.5 0 010 5zM7.527 17a4.5 4.5 0 018.946 0H7.527z"></path>
    </svg>
  );
};

FileUser.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FileUser.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FileUser;
