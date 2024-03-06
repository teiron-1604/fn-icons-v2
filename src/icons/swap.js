import React from 'react';
import PropTypes from 'prop-types';

const Swap = props => {
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
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16.001A8 8 0 0012 20zM7 9l3-3.5L13 9h-2v4H9V9H7zm10 6l-3 3.5-3-3.5h2v-4h2v4h2z"></path>
    </svg>
  );
};

Swap.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Swap.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Swap;
