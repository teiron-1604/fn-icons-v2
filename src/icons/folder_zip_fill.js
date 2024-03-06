import React from 'react';
import PropTypes from 'prop-types';

const FolderZipFill = props => {
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
      <path d="M21 5a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2H16v2h2V5h3zm-3 8h-2v2h-2v3h4v-5zm-2-2h-2v2h2v-2zm2-2h-2v2h2V9zm-2-2h-2v2h2V7z"></path>
    </svg>
  );
};

FolderZipFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FolderZipFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FolderZipFill;
