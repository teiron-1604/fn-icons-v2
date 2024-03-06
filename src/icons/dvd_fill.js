import React from 'react';
import PropTypes from 'prop-types';

const DvdFill = props => {
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
      <g clipPath="url(#clip0_18_15149)">
        <path d="M13 11V6l-5 7h3v5l5-7h-3zm-1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15149">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

DvdFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DvdFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DvdFill;
