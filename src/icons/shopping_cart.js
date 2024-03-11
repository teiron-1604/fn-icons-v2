import React from 'react';
import PropTypes from 'prop-types';

const ShoppingCart = props => {
  const { color, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M4 16V4H2V2h3a1 1 0 011 1v12h12.438l2-8H8V5h13.72a1 1 0 01.97 1.243l-2.5 10a1 1 0 01-.97.757H5a1 1 0 01-1-1zm2 7a2 2 0 110-4 2 2 0 010 4zm12 0a2 2 0 110-4 2 2 0 010 4z"></path>
    </svg>
  );
};

ShoppingCart.propTypes = {
  color: PropTypes.string
};

ShoppingCart.defaultProps = {
  color: 'currentColor'
};

export default ShoppingCart;
