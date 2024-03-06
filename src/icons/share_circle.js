import React from 'react';
import PropTypes from 'prop-types';

const ShareCircle = props => {
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
      <g clipPath="url(#clip0_18_14869)">
        <path d="M11 2.05v2.012A8.001 8.001 0 0012 20a8 8 0 007.938-7h2.013c-.502 5.053-4.766 9-9.951 9-5.523 0-10-4.477-10-10 0-5.185 3.947-9.449 9-9.95zm9 3.364l-8 8L10.586 12l8-8H14V2h8v8h-2V5.414z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14869">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ShareCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ShareCircle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ShareCircle;
