import React from 'react';
import PropTypes from 'prop-types';

const ArrowRightDownFill = props => {
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
      <g clipPath="url(#clip0_18_12604)">
        <path d="M11.637 13.05L5.98 7.395 7.394 5.98l5.657 5.657L18 6.687V18H6.687l4.95-4.95z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_12604">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ArrowRightDownFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowRightDownFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowRightDownFill;
