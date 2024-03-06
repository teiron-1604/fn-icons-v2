import React from 'react';
import PropTypes from 'prop-types';

const ChatFollowUpFill = props => {
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
      <path d="M21 3a1 1 0 011 1v14a1 1 0 01-1 1H6.455L2 22.5V4a1 1 0 011-1h18zm-4 4h-2v8h2V7zm-6 1H9v1.999L7 10v2l2-.001V14h2v-2.001L13 12v-2l-2-.001V8z"></path>
    </svg>
  );
};

ChatFollowUpFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChatFollowUpFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ChatFollowUpFill;
