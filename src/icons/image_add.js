import React from 'react';
import PropTypes from 'prop-types';

const ImageAdd = props => {
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
      <g clipPath="url(#clip0_18_15213)">
        <path d="M21 15v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2zm.008-12c.548 0 .992.445.992.993V13h-2V5H4v13.999L14 9l3 3v2.829l-3-3L6.827 19H14v2H2.992A.993.993 0 012 20.007V3.993A1 1 0 012.992 3h18.016zM8 7a2 2 0 110 4 2 2 0 010-4z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15213">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ImageAdd.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ImageAdd.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ImageAdd;
