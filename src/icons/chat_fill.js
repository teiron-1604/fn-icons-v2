import React from 'react';
import PropTypes from 'prop-types';

const ChatFill = props => {
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
      <path d="M14.45 19L12 22.5 9.55 19H3a1 1 0 01-1-1V4a1 1 0 011-1h18a1 1 0 011 1v14a1 1 0 01-1 1h-6.55z"></path>
    </svg>
  );
};

ChatFill.propTypes = {
  color: PropTypes.string
};

ChatFill.defaultProps = {
  color: 'currentColor'
};

export default ChatFill;
