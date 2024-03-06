import React from 'react';
import PropTypes from 'prop-types';

const ShareForwardBoxFill = props => {
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
      <g clipPath="url(#clip0_18_14853)">
        <path d="M9 3v2H4v14h16v-9h2v10a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h6zm7 2V1l7 6h-9a2 2 0 00-2 2v6h-2V9a4 4 0 014-4h2z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14853">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ShareForwardBoxFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ShareForwardBoxFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ShareForwardBoxFill;
