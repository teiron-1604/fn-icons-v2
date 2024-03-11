import React from 'react';
import PropTypes from 'prop-types';

const IndentIncrease = props => {
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
      <path d="M3 4h18v2H3V4zm0 15h18v2H3v-2zm8-5h10v2H11v-2zm0-5h10v2H11V9zm-4 3.5L3 16V9l4 3.5z"></path>
    </svg>
  );
};

IndentIncrease.propTypes = {
  color: PropTypes.string
};

IndentIncrease.defaultProps = {
  color: 'currentColor'
};

export default IndentIncrease;
