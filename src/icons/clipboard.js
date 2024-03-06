import React from 'react';
import PropTypes from 'prop-types';

const Clipboard = props => {
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
      <path d="M7 4V2h10v2h3.007c.548 0 .993.445.993.993v16.014a.994.994 0 01-.993.993H3.993A.994.994 0 013 21.007V4.993C3 4.445 3.445 4 3.993 4H7zm0 2H5v14h14V6h-2v2H7V6zm2-2v2h6V4H9z"></path>
    </svg>
  );
};

Clipboard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Clipboard.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Clipboard;
