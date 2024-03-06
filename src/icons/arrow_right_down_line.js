import React from 'react';
import PropTypes from 'prop-types';

const ArrowRightDownLine = props => {
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
      <g clipPath="url(#clip0_18_12598)">
        <path d="M14.59 16.004L5.982 7.397l1.414-1.414 8.607 8.606V7.004h2v11h-11v-2h7.587z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_12598">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ArrowRightDownLine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowRightDownLine.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowRightDownLine;
