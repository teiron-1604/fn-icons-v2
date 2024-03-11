import React from 'react';
import PropTypes from 'prop-types';

const ArrowGoForwardFill = props => {
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
      <g clipPath="url(#clip0_18_12638)">
        <path d="M16 7h-5a6 6 0 100 12h9v2h-9a8 8 0 010-16h5V1l6 5-6 5V7z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_12638">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ArrowGoForwardFill.propTypes = {
  color: PropTypes.string
};

ArrowGoForwardFill.defaultProps = {
  color: 'currentColor'
};

export default ArrowGoForwardFill;
