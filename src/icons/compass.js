import React from 'react';
import PropTypes from 'prop-types';

const Compass = props => {
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
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16.001A8 8 0 0012 20zm4.5-12.5L14 14l-6.5 2.5L10 10l6.5-2.5zM12 13a1 1 0 100-2 1 1 0 000 2z"></path>
    </svg>
  );
};

Compass.propTypes = {
  color: PropTypes.string
};

Compass.defaultProps = {
  color: 'currentColor'
};

export default Compass;
