import React from 'react';
import PropTypes from 'prop-types';

const FileFill = props => {
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
      <g clipPath="url(#clip0_18_12885)">
        <path d="M21 9v11.993A1 1 0 0120.007 22H3.993A.993.993 0 013 21.008V2.992C3 2.455 3.447 2 3.998 2H14v6a1 1 0 001 1h6zm0-2h-5V2.003L21 7z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_12885">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FileFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FileFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FileFill;
