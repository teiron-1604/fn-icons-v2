import React from 'react';
import PropTypes from 'prop-types';

const FolderOpen = props => {
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
      <path d="M3 21a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2H20a1 1 0 011 1v3h-2V7h-7.414l-2-2H4v11.998L5.5 11h17l-2.31 9.243a1 1 0 01-.97.757H3zm16.938-8H7.062l-1.5 6h12.876l1.5-6z"></path>
    </svg>
  );
};

FolderOpen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FolderOpen.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FolderOpen;
