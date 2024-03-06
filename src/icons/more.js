import React from 'react';
import PropTypes from 'prop-types';

const More = props => {
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
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16.001A8 8 0 0012 20z"></path>
      <path d="M6 12c0 .733.6 1.333 1.333 1.333.734 0 1.334-.6 1.334-1.333s-.6-1.333-1.334-1.333C6.6 10.667 6 11.267 6 12zm9.333 0c0 .733.6 1.333 1.334 1.333.733 0 1.333-.6 1.333-1.333s-.6-1.333-1.333-1.333c-.734 0-1.334.6-1.334 1.333zm-4.666 0c0 .733.6 1.333 1.333 1.333s1.333-.6 1.333-1.333-.6-1.333-1.333-1.333-1.333.6-1.333 1.333z"></path>
    </svg>
  );
};

More.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

More.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default More;
