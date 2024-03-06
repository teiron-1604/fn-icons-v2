import React from 'react';
import PropTypes from 'prop-types';

const LockOpenFill = props => {
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
      <path d="M7 10h13a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V11a1 1 0 011-1h1V9a7 7 0 0113.262-3.13l-1.789.893A5 5 0 007 9v1zm3 5v2h4v-2h-4z"></path>
    </svg>
  );
};

LockOpenFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LockOpenFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default LockOpenFill;
