import React from 'react';
import PropTypes from 'prop-types';

const FolderDownFill = props => {
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
      <path d="M12.414 5H21a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2zM13 13V9h-2v4H8l4 4 4-4h-3z"></path>
    </svg>
  );
};

FolderDownFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FolderDownFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FolderDownFill;
