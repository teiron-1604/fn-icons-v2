import React from 'react';
import PropTypes from 'prop-types';

const UserAddFill = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <g clipPath="url(#clip0_18_13752)">
        <path d="M14 14.252V22H4a8 8 0 0110-7.748zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm6 4v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13752">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UserAddFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UserAddFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UserAddFill;
