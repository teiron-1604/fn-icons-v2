import React from 'react';
import PropTypes from 'prop-types';

const EmotionNormal = props => {
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
      <g clipPath="url(#clip0_18_13694)">
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16.001A8 8 0 0012 20zm-4-6h8v2H8v-2zm0-3a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm8 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13694">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

EmotionNormal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

EmotionNormal.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default EmotionNormal;
