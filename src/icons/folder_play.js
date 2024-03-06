import React from 'react';
import PropTypes from 'prop-types';

const FolderPlay = props => {
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
      <path d="M12.414 5H21a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2zM4 5v14h16V7h-8.414l-2-2H4z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.487 8.141a1 1 0 01.987-.021l6.5 3.5a1 1 0 01.05 1.732l-6.5 4A1 1 0 018 16.5V9a1 1 0 01.487-.859zM10 10.674v4.036l3.498-2.152L10 10.674z"
      ></path>
    </svg>
  );
};

FolderPlay.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FolderPlay.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FolderPlay;
