import React from 'react';
import PropTypes from 'prop-types';

const WalletFill = props => {
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
      <path d="M22 6h-7a6 6 0 100 12h7v2a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h18a1 1 0 011 1v2zm-7 2h8v8h-8a4 4 0 110-8zm0 3v2h3v-2h-3z"></path>
    </svg>
  );
};

WalletFill.propTypes = {
  color: PropTypes.string
};

WalletFill.defaultProps = {
  color: 'currentColor'
};

export default WalletFill;
