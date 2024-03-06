import React from 'react';
import PropTypes from 'prop-types';

const SwapFill = props => {
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
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 9h2v4h2V9h2l-3-3.5L7 9zm10 6h-2v-4h-2v4h-2l3 3.5 3-3.5z"></path>
    </svg>
  );
};

SwapFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SwapFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SwapFill;
