import React from 'react';
import PropTypes from 'prop-types';

const ArrowGoForward = props => {
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
      <g clipPath="url(#clip0_18_12632)">
        <path d="M18.172 7H11a6 6 0 100 12h9v2h-9a8 8 0 110-16h7.172l-2.536-2.536L17.05 1.05 22 6l-4.95 4.95-1.414-1.414L18.172 7z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_12632">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ArrowGoForward.propTypes = {
  color: PropTypes.string
};

ArrowGoForward.defaultProps = {
  color: 'currentColor'
};

export default ArrowGoForward;
