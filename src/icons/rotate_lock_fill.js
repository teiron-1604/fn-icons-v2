import React from 'react';
import PropTypes from 'prop-types';

const RotateLockFill = props => {
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
      <g clipPath="url(#clip0_18_13525)">
        <path d="M12 2c5.523 0 10 4.477 10 10 0 2.136-.67 4.116-1.811 5.741L17 12h3a8 8 0 10-2.46 5.772l.998 1.795A9.96 9.96 0 0112 22C6.477 22 2 17.523 2 12S6.477 2 12 2zm0 5a3 3 0 013 3v1h1v5H8v-5h1v-1a3 3 0 013-3zm0 2a1 1 0 00-.993.883L11 10v1h2v-1a1 1 0 00-.883-.993L12 9z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13525">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

RotateLockFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RotateLockFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RotateLockFill;
