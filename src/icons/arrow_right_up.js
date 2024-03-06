import React from 'react';
import PropTypes from 'prop-types';

const ArrowRightUp = props => {
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
      <path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path>
    </svg>
  );
};

ArrowRightUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowRightUp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowRightUp;
