import React from 'react';
import PropTypes from 'prop-types';

const ImageAddFill = props => {
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
      <g clipPath="url(#clip0_18_15219)">
        <path d="M21 15v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2zm.008-12c.548 0 .992.445.992.993v9.349A5.99 5.99 0 0020 13V5H4l.001 14 9.292-9.293a1 1 0 011.32-.084l.093.085 3.546 3.55a6.003 6.003 0 00-3.91 7.743L2.992 21A.993.993 0 012 20.007V3.993A1 1 0 012.992 3h18.016zM8 7a2 2 0 110 4 2 2 0 010-4z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15219">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ImageAddFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ImageAddFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ImageAddFill;
