import React from 'react';
import PropTypes from 'prop-types';

const BringToFront = props => {
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
      <path d="M11 3a1 1 0 011 1v2h5a1 1 0 011 1v5h2a1 1 0 011 1v7a1 1 0 01-1 1h-7a1 1 0 01-1-1v-2H7a1 1 0 01-1-1v-5H4a1 1 0 01-1-1V4a1 1 0 011-1h7zm5 5H8v8h8V8z"></path>
    </svg>
  );
};

BringToFront.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BringToFront.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BringToFront;
