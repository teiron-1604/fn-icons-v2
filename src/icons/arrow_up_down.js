import React from 'react';
import PropTypes from 'prop-types';

const ArrowUpDown = props => {
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
      <g clipPath="url(#clip0_18_12616)">
        <path d="M12 8H8.001L8 20H6V8H2l5-5 5 5zm10 8l-5 5-5-5h4V4h2v12h4z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_12616">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ArrowUpDown.propTypes = {
  color: PropTypes.string
};

ArrowUpDown.defaultProps = {
  color: 'currentColor'
};

export default ArrowUpDown;
