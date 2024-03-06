import React from 'react';
import PropTypes from 'prop-types';

const ServerBoxFill = props => {
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
      <path d="M21 3v18a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1h16a1 1 0 011 1zM5 16v4h14v-4H5zm10 1h2v2h-2v-2z"></path>
    </svg>
  );
};

ServerBoxFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ServerBoxFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ServerBoxFill;
