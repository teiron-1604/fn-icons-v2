import React from 'react';
import PropTypes from 'prop-types';

const ShareFill = props => {
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
      <path d="M13.576 17.271l-5.11-2.787a3.5 3.5 0 110-4.968l5.11-2.787a3.5 3.5 0 11.958 1.755l-5.11 2.787c.102.48.102.977 0 1.458l5.11 2.787a3.5 3.5 0 11-.958 1.755z"></path>
    </svg>
  );
};

ShareFill.propTypes = {
  color: PropTypes.string
};

ShareFill.defaultProps = {
  color: 'currentColor'
};

export default ShareFill;
