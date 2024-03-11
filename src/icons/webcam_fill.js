import React from 'react';
import PropTypes from 'prop-types';

const WebcamFill = props => {
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
      <g clipPath="url(#clip0_18_15567)">
        <path d="M11 21v-1.07A7.002 7.002 0 015 13V8a7 7 0 0114 0v5a7.002 7.002 0 01-6 6.93V21h4v2H7v-2h4zm1-12a1 1 0 110-2 1 1 0 010 2zm0 2a3 3 0 100-6 3 3 0 000 6z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15567">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

WebcamFill.propTypes = {
  color: PropTypes.string
};

WebcamFill.defaultProps = {
  color: 'currentColor'
};

export default WebcamFill;
