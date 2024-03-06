import React from 'react';
import PropTypes from 'prop-types';

const FolderPlus = props => {
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
      <path d="M12.414 5H21a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2zM4 5v14h16V7h-8.414l-2-2H4zm7 7V9h2v3h3v2h-3v3h-2v-3H8v-2h3z"></path>
    </svg>
  );
};

FolderPlus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FolderPlus.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FolderPlus;
