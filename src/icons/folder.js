import React from 'react';
import PropTypes from 'prop-types';

const Folder = props => {
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
      <path d="M4 5v14h16V7h-8.414l-2-2H4zm8.414 0H21a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2z"></path>
    </svg>
  );
};

Folder.propTypes = {
  color: PropTypes.string
};

Folder.defaultProps = {
  color: 'currentColor'
};

export default Folder;
