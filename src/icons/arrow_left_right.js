import React from 'react';
import PropTypes from 'prop-types';

const ArrowLeftRight = props => {
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
      <g clipPath="url(#clip0_18_12610)">
        <path d="M16 16v-4l5 5-5 5v-4H4v-2h12zM8 2v3.999L20 6v2H8v4L3 7l5-5z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_12610">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ArrowLeftRight.propTypes = {
  color: PropTypes.string
};

ArrowLeftRight.defaultProps = {
  color: 'currentColor'
};

export default ArrowLeftRight;
