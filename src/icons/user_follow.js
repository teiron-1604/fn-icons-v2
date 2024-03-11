import React from 'react';
import PropTypes from 'prop-types';

const UserFollow = props => {
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
      <g clipPath="url(#clip0_18_13758)">
        <path d="M14 14.252v2.09A6 6 0 006 22l-2-.001a8 8 0 0110-7.748v.001zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm5.793 8.914l3.535-3.535 1.415 1.414-4.95 4.95-3.536-3.536 1.415-1.414 2.12 2.121h.001z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13758">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UserFollow.propTypes = {
  color: PropTypes.string
};

UserFollow.defaultProps = {
  color: 'currentColor'
};

export default UserFollow;
