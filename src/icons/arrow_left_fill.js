import React from 'react';
import PropTypes from 'prop-types';

const ArrowLeftFill = props => {
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
      <path d="M12 13v7l-8-8 8-8v7h8v2h-8z"></path>
    </svg>
  );
};

ArrowLeftFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowLeftFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowLeftFill;
