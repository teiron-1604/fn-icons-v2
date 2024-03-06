import React from 'react';
import PropTypes from 'prop-types';

const NodeTree = props => {
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
      <path d="M10 2a1 1 0 011 1v4a1 1 0 01-1 1H8v2h5V9a1 1 0 011-1h6a1 1 0 011 1v4a1 1 0 01-1 1h-6a1 1 0 01-1-1v-1H8v6h5v-1a1 1 0 011-1h6a1 1 0 011 1v4a1 1 0 01-1 1h-6a1 1 0 01-1-1v-1H7a1 1 0 01-1-1V8H4a1 1 0 01-1-1V3a1 1 0 011-1h6zm9 16h-4v2h4v-2zm0-8h-4v2h4v-2zM9 4H5v2h4V4z"></path>
    </svg>
  );
};

NodeTree.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

NodeTree.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default NodeTree;
