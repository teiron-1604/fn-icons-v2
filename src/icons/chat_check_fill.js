import React from 'react';
import PropTypes from 'prop-types';

const ChatCheckFill = props => {
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
      <path d="M6.455 19L2 22.5V4a1 1 0 011-1h18a1 1 0 011 1v14a1 1 0 01-1 1H6.455zm4.838-6.879L8.818 9.646l-1.414 1.415 3.889 3.889 5.657-5.657-1.414-1.414-4.243 4.242z"></path>
    </svg>
  );
};

ChatCheckFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChatCheckFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ChatCheckFill;
