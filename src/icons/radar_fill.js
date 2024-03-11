import React from 'react';
import PropTypes from 'prop-types';

const RadarFill = props => {
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
      <path d="M4.257 5.671L12 13.414 13.414 12 5.671 4.257A9.959 9.959 0 0112 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-2.401.846-4.605 2.257-6.329z"></path>
    </svg>
  );
};

RadarFill.propTypes = {
  color: PropTypes.string
};

RadarFill.defaultProps = {
  color: 'currentColor'
};

export default RadarFill;
