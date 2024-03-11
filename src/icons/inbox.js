import React from 'react';
import PropTypes from 'prop-types';

const Inbox = props => {
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
      <path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm17 11h-3.416a5.002 5.002 0 01-9.168 0H4v5h16v-5zm0-2V5H4v7h5a3 3 0 006 0h5z"></path>
    </svg>
  );
};

Inbox.propTypes = {
  color: PropTypes.string
};

Inbox.defaultProps = {
  color: 'currentColor'
};

export default Inbox;
