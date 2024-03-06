import React from 'react';
import PropTypes from 'prop-types';

const ClipboardFill = props => {
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
      <path d="M6 4v4h12V4h2.007c.548 0 .993.445.993.993v16.014a.994.994 0 01-.993.993H3.993A.994.994 0 013 21.007V4.993C3 4.445 3.445 4 3.993 4H6zm2-2h8v4H8V2z"></path>
    </svg>
  );
};

ClipboardFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ClipboardFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ClipboardFill;
