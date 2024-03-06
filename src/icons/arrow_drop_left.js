import React from 'react';
import PropTypes from 'prop-types';

const ArrowDropLeft = props => {
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
      <path d="M11.828 12l2.829 2.828-1.414 1.415L9 12l4.243-4.243 1.414 1.415L11.828 12z"></path>
    </svg>
  );
};

ArrowDropLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowDropLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowDropLeft;
