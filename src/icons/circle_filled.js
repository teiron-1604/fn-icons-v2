import React from 'react';
import PropTypes from 'prop-types';

const CircleFilled = props => {
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
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
    </svg>
  );
};

CircleFilled.propTypes = {
  color: PropTypes.string
};

CircleFilled.defaultProps = {
  color: 'currentColor'
};

export default CircleFilled;
