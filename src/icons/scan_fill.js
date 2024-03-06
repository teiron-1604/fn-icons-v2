import React from 'react';
import PropTypes from 'prop-types';

const ScanFill = props => {
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
      <path d="M15 3h6v6h-6V3zM9 3v6H3V3h6zm6 18v-6h6v6h-6zm-6 0H3v-6h6v6zM3 11h18v2H3v-2z"></path>
    </svg>
  );
};

ScanFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ScanFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ScanFill;
