import React from 'react';
import PropTypes from 'prop-types';

const AspectRatio = props => {
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
      <g clipPath="url(#clip0_18_15070)">
        <path d="M21 3a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h18zm-1 2H4v14h16V5zm-7 12v-2h3v-3h2v5h-5zM11 7v2H8v3H6V7h5z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15070">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

AspectRatio.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AspectRatio.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AspectRatio;
