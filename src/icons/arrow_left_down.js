import React from 'react';
import PropTypes from 'prop-types';

const ArrowLeftDown = props => {
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
      <g clipPath="url(#clip0_18_12546)">
        <path d="M9 13.59l8.607-8.607 1.414 1.414-8.607 8.607H18v2H7v-11h2v7.586z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_12546">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ArrowLeftDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowLeftDown.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowLeftDown;
