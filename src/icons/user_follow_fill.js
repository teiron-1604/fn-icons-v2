import React from 'react';
import PropTypes from 'prop-types';

const UserFollowFill = props => {
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
      <g clipPath="url(#clip0_18_13764)">
        <path d="M13 14.062V22H4a8 8 0 019-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm5.793 6.914l3.535-3.535 1.415 1.414-4.95 4.95-3.536-3.536 1.415-1.414 2.12 2.121h.001z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13764">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UserFollowFill.propTypes = {
  color: PropTypes.string
};

UserFollowFill.defaultProps = {
  color: 'currentColor'
};

export default UserFollowFill;
