import React from 'react';
import PropTypes from 'prop-types';

const AlertCircle = props => {
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
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16.001A8 8 0 0012 20zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"></path>
    </svg>
  );
};

AlertCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AlertCircle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AlertCircle;
