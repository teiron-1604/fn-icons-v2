import React from 'react';
import PropTypes from 'prop-types';

const ArrowDownCircleFill = props => {
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
      <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm1 10V8h-2v4H8l4 4 4-4h-3z"></path>
    </svg>
  );
};

ArrowDownCircleFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowDownCircleFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowDownCircleFill;
