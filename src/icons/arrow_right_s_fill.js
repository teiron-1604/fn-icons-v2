import React from 'react';
import PropTypes from 'prop-types';

const ArrowRightSFill = props => {
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
      <path d="M14.293 11.293a1 1 0 010 1.414l-3.586 3.586c-.63.63-1.707.184-1.707-.707V8.414c0-.89 1.077-1.337 1.707-.707l3.586 3.586z"></path>
    </svg>
  );
};

ArrowRightSFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowRightSFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowRightSFill;
