import React from 'react';
import PropTypes from 'prop-types';

const UserFill = props => {
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
      <g clipPath="url(#clip0_18_13728)">
        <path d="M4 22a8 8 0 0116 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13728">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UserFill.propTypes = {
  color: PropTypes.string
};

UserFill.defaultProps = {
  color: 'currentColor'
};

export default UserFill;
