import React from 'react';
import PropTypes from 'prop-types';

const RadioButtonLine = props => {
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
      <g clipPath="url(#clip0_18_14560)">
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16.001A8 8 0 0012 20zm0-3a5 5 0 110-10 5 5 0 010 10z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14560">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

RadioButtonLine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RadioButtonLine.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RadioButtonLine;
