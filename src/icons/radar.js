import React from 'react';
import PropTypes from 'prop-types';

const Radar = props => {
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
      <g clipPath="url(#clip0_18_13555)">
        <path d="M5.671 4.257L13.414 12 12 13.414l-6.32-6.32a8 8 0 103.706-2.658L7.85 2.9A9.963 9.963 0 0112 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12a9.98 9.98 0 013.671-7.743z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13555">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Radar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Radar.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Radar;
