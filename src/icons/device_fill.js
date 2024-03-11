import React from 'react';
import PropTypes from 'prop-types';

const DeviceFill = props => {
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
      <path d="M19 6h-8a1 1 0 00-1 1v13H4a1 1 0 01-1-1V3a1 1 0 011-1h14a1 1 0 011 1v3zm-6 2h8a1 1 0 011 1v12a1 1 0 01-1 1h-8a1 1 0 01-1-1V9a1 1 0 011-1z"></path>
    </svg>
  );
};

DeviceFill.propTypes = {
  color: PropTypes.string
};

DeviceFill.defaultProps = {
  color: 'currentColor'
};

export default DeviceFill;
