import React from 'react';
import PropTypes from 'prop-types';

const User = props => {
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
      <g clipPath="url(#clip0_18_13722)">
        <path d="M4 22a8 8 0 0116 0h-2a6 6 0 10-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13722">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

User.propTypes = {
  color: PropTypes.string
};

User.defaultProps = {
  color: 'currentColor'
};

export default User;
