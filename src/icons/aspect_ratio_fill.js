import React from 'react';
import PropTypes from 'prop-types';

const AspectRatioFill = props => {
  const { color, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <g clipPath="url(#clip0_18_15076)">
        <path d="M21 3a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h18zm-3 9h-2v3h-3v2h5v-5zm-7-5H6v5h2V9h3V7z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15076">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

AspectRatioFill.propTypes = {
  color: PropTypes.string
};

AspectRatioFill.defaultProps = {
  color: 'currentColor'
};

export default AspectRatioFill;
