import React from 'react';
import PropTypes from 'prop-types';

const LocationFill = props => {
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
      <path d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1112.728 0zM12 15a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 110-4 2 2 0 010 4z"></path>
    </svg>
  );
};

LocationFill.propTypes = {
  color: PropTypes.string
};

LocationFill.defaultProps = {
  color: 'currentColor'
};

export default LocationFill;
