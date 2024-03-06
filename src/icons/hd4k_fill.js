import React from 'react';
import PropTypes from 'prop-types';

const Hd4kFill = props => {
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
      <g clipPath="url(#clip0_18_15035)">
        <path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm8.5 10.5V12h-1V9H9v3H7.5V9H6v4.5h3V15h1.5v-1.5h1zM18 15l-2.25-3L18 9h-1.75l-1.75 2.25V9H13v6h1.5v-2.25L16.25 15H18z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15035">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Hd4kFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Hd4kFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Hd4kFill;
