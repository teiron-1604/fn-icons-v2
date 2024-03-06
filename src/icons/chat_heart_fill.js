import React from 'react';
import PropTypes from 'prop-types';

const ChatHeartFill = props => {
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
      <path d="M6.455 19L2 22.5V4a1 1 0 011-1h18a1 1 0 011 1v14a1 1 0 01-1 1H6.455zm5.563-4.3l3.359-3.359a2.249 2.249 0 10-3.182-3.182l-.177.177-.177-.177a2.25 2.25 0 10-3.182 3.182l3.359 3.359z"></path>
    </svg>
  );
};

ChatHeartFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChatHeartFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ChatHeartFill;
