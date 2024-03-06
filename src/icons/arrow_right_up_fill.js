import React from 'react';
import PropTypes from 'prop-types';

const ArrowRightUpFill = props => {
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
      <g clipPath="url(#clip0_18_12499)">
        <path d="M13.05 12.36l-5.656 5.658-1.414-1.415 5.657-5.656-4.95-4.95H18V17.31l-4.95-4.95z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_12499">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ArrowRightUpFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowRightUpFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowRightUpFill;
