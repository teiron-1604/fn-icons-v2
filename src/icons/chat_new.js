import React from 'react';
import PropTypes from 'prop-types';

const ChatNew = props => {
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
      <path d="M14 3v2H4v13.385L5.763 17H20v-7h2v8a1 1 0 01-1 1H6.455L2 22.5V4a1 1 0 011-1h11zm5 0V0h2v3h3v2h-3v3h-2V5h-3V3h3z"></path>
    </svg>
  );
};

ChatNew.propTypes = {
  color: PropTypes.string
};

ChatNew.defaultProps = {
  color: 'currentColor'
};

export default ChatNew;
