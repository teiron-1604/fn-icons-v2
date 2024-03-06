import React from 'react';
import PropTypes from 'prop-types';

const ArrowDropUpFill = props => {
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
      <path d="M12 10l4 4H8l4-4z"></path>
    </svg>
  );
};

ArrowDropUpFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowDropUpFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowDropUpFill;
