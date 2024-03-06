import React from 'react';
import PropTypes from 'prop-types';

const ChevronDoubleLeft = props => {
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
      <path d="M13.2 7.2L18 12l-4.8 4.8M6 7.2l4.8 4.8L6 16.8"></path>
    </svg>
  );
};

ChevronDoubleLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChevronDoubleLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ChevronDoubleLeft;
