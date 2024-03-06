import React from 'react';
import PropTypes from 'prop-types';

const FolderMusicFill = props => {
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
      <path d="M12.414 5H21a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2zM11 13.05a2.5 2.5 0 102 2.45V11h3V9h-5v4.05z"></path>
    </svg>
  );
};

FolderMusicFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FolderMusicFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FolderMusicFill;
