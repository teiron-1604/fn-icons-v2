import React from 'react';
import PropTypes from 'prop-types';

const LogoutBoxRFill = props => {
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
      <g clipPath="url(#clip0_18_15722)">
        <path d="M5 22a1 1 0 01-1-1V3a1 1 0 011-1h14a1 1 0 011 1v18a1 1 0 01-1 1H5zm10-6l5-4-5-4v3H9v2h6v3z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15722">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

LogoutBoxRFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LogoutBoxRFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default LogoutBoxRFill;
