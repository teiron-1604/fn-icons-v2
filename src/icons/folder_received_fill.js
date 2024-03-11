import React from 'react';
import PropTypes from 'prop-types';

const FolderReceivedFill = props => {
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
      <path d="M22 13.126A6 6 0 0013.303 21H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2H21a1 1 0 011 1v7.126zM20 17h3v2h-3v3.5L15 18l5-4.5V17z"></path>
    </svg>
  );
};

FolderReceivedFill.propTypes = {
  color: PropTypes.string
};

FolderReceivedFill.defaultProps = {
  color: 'currentColor'
};

export default FolderReceivedFill;
