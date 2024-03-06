import React from 'react';
import PropTypes from 'prop-types';

const ArrowLeftUpFill = props => {
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
      <g clipPath="url(#clip0_18_12449)">
        <path d="M12.36 10.947l5.658 5.656-1.415 1.415-5.656-5.657-4.95 4.95V5.997H17.31l-4.95 4.95z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_12449">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ArrowLeftUpFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowLeftUpFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowLeftUpFill;
