import React from 'react';
import PropTypes from 'prop-types';

const InboxArchive = props => {
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
      <path d="M4 3h16l2 4v13a1 1 0 01-1 1H3a1 1 0 01-1-1V7.004L4 3zm16 6H4v10h16V9zm-.236-2l-1-2H5.237l-1 2h15.527zM13 14h3l-4 4-4-4h3v-4h2v4z"></path>
    </svg>
  );
};

InboxArchive.propTypes = {
  color: PropTypes.string
};

InboxArchive.defaultProps = {
  color: 'currentColor'
};

export default InboxArchive;
