import React from 'react';
import PropTypes from 'prop-types';

const StopMini = props => {
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
      <g clipPath="url(#clip0_18_15402)">
        <path d="M8 8v8h8V8H8zM6 7a1 1 0 011-1h10a1 1 0 011 1v10a1 1 0 01-1 1H7a1 1 0 01-1-1V7z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15402">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

StopMini.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

StopMini.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default StopMini;
