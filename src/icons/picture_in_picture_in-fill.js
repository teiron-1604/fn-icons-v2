import React from 'react';
import PropTypes from 'prop-types';

const PictureInPictureInFill = props => {
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
      <g clipPath="url(#clip0_18_15367)">
        <path d="M21 3a1 1 0 011 1v7h-2V5H4v14h6v2H3a1 1 0 01-1-1V4a1 1 0 011-1h18zm0 10a1 1 0 011 1v6a1 1 0 01-1 1h-8a1 1 0 01-1-1v-6a1 1 0 011-1h8zM6.707 6.293l2.25 2.25L11 6.5V12H5.5l2.043-2.043-2.25-2.25 1.414-1.414z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15367">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

PictureInPictureInFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PictureInPictureInFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PictureInPictureInFill;
