import React from 'react';
import PropTypes from 'prop-types';

const FolderUserFill = props => {
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
      <path d="M12.414 5H21a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2zM12 13a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-4 5h8a4 4 0 10-8 0z"></path>
    </svg>
  );
};

FolderUserFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FolderUserFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FolderUserFill;
