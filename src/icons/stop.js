import React from 'react';
import PropTypes from 'prop-types';

const Stop = props => {
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
      <g clipPath="url(#clip0_18_15414)">
        <path d="M7 7v10h10V7H7zM6 5h12a1 1 0 011 1v12a1 1 0 01-1 1H6a1 1 0 01-1-1V6a1 1 0 011-1z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15414">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Stop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Stop.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Stop;
