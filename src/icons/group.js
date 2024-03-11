import React from 'react';
import PropTypes from 'prop-types';

const Group = props => {
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
      <g clipPath="url(#clip0_18_13734)">
        <path d="M2 22a8 8 0 0116 0h-2a6 6 0 10-12 0H2zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm8.284 3.703A8.002 8.002 0 0123 22h-2a6 6 0 00-3.537-5.473l.82-1.824h.001zm-.688-11.29a5.5 5.5 0 011.966 8.796A5.499 5.499 0 0116 13.978v-2.013a3.5 3.5 0 001.041-6.609l.555-1.943z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13734">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Group.propTypes = {
  color: PropTypes.string
};

Group.defaultProps = {
  color: 'currentColor'
};

export default Group;
