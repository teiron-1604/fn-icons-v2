import React from 'react';
import PropTypes from 'prop-types';

const GroupFill = props => {
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
      <g clipPath="url(#clip0_18_13740)">
        <path d="M2 22a8 8 0 0116 0H2zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm7.363 2.233A7.504 7.504 0 0122.983 22H20c0-2.61-1-4.986-2.637-6.767zm-2.023-2.276A7.98 7.98 0 0018 7a7.964 7.964 0 00-1.015-3.903 5 5 0 01-1.645 9.86z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13740">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

GroupFill.propTypes = {
  color: PropTypes.string
};

GroupFill.defaultProps = {
  color: 'currentColor'
};

export default GroupFill;
