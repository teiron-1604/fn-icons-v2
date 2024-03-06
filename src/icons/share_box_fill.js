import React from 'react';
import PropTypes from 'prop-types';

const ShareBoxFill = props => {
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
      <g clipPath="url(#clip0_18_14863)">
        <path d="M10 3v2H5v14h14v-5h2v6a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h6zm7.707 4.707L12 13.414 10.586 12l5.707-5.707L13 3h8v8l-3.293-3.293z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14863">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ShareBoxFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ShareBoxFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ShareBoxFill;
