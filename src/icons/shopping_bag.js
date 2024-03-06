import React from 'react';
import PropTypes from 'prop-types';

const ShoppingBag = props => {
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
      <path d="M6.5 2h11a1 1 0 01.8.4L21 6v15a1 1 0 01-1 1H4a1 1 0 01-1-1V6l2.7-3.6a1 1 0 01.8-.4zM19 8H5v12h14V8zm-.5-2L17 4H7L5.5 6h13zM9 10v2a3 3 0 006 0v-2h2v2a5 5 0 11-10 0v-2h2z"></path>
    </svg>
  );
};

ShoppingBag.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ShoppingBag.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ShoppingBag;
