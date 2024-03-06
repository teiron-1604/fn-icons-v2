import React from 'react';
import PropTypes from 'prop-types';

const Scan = props => {
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
      <path d="M15 3h6v5h-2V5h-4V3zM9 3v2H5v3H3V3h6zm6 18v-2h4v-3h2v5h-6zm-6 0H3v-5h2v3h4v2zM3 11h18v2H3v-2z"></path>
    </svg>
  );
};

Scan.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Scan.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Scan;
