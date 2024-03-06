import React from 'react';
import PropTypes from 'prop-types';

const Chat = props => {
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
      <path d="M14.45 19L12 22.5 9.55 19H3a1 1 0 01-1-1V4a1 1 0 011-1h18a1 1 0 011 1v14a1 1 0 01-1 1h-6.55zm-1.041-2H20V5H4v12h6.591L12 19.012 13.409 17z"></path>
    </svg>
  );
};

Chat.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Chat.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Chat;
