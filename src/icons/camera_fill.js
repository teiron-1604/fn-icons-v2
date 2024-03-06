import React from 'react';
import PropTypes from 'prop-types';

const CameraFill = props => {
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
      <g clipPath="url(#clip0_18_15092)">
        <path d="M9 3h6l2 2h4a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1h4l2-2zm3 16a6 6 0 100-12 6 6 0 000 12zm0-2a4 4 0 110-8 4 4 0 010 8z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15092">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

CameraFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CameraFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CameraFill;
