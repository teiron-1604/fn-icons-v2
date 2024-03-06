import React from 'react';
import PropTypes from 'prop-types';

const StopMiniFill = props => {
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
      <g clipPath="url(#clip0_18_15408)">
        <path d="M6 7v10a1 1 0 001 1h10a1 1 0 001-1V7a1 1 0 00-1-1H7a1 1 0 00-1 1z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15408">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

StopMiniFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

StopMiniFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default StopMiniFill;
