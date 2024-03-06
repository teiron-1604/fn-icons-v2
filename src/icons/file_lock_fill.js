import React from 'react';
import PropTypes from 'prop-types';

const FileLockFill = props => {
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
      <path d="M16 2l5 5v14.008a.993.993 0 01-.993.992H3.993A1 1 0 013 21.008V2.992C3 2.444 3.445 2 3.993 2H16zm-1 9v-1a3 3 0 00-6 0v1H8v5h8v-5h-1zm-2 0h-2v-1a1 1 0 012 0v1z"></path>
    </svg>
  );
};

FileLockFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FileLockFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FileLockFill;
