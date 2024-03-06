import React from 'react';
import PropTypes from 'prop-types';

const ArrowUpFill = props => {
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
      <path d="M13 12v8h-2v-8H4l8-8 8 8h-7z"></path>
    </svg>
  );
};

ArrowUpFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowUpFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowUpFill;
