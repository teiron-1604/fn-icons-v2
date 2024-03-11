import React from 'react';
import PropTypes from 'prop-types';

const Building = props => {
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
      <path d="M3 19V5.7a1 1 0 01.658-.94l9.671-3.516a.5.5 0 01.671.47v4.953l6.316 2.105a1 1 0 01.684.949V19h2v2H1v-2h2zm2 0h7V3.855L5 6.401V19zm14 0v-8.558l-5-1.667V19h5z"></path>
    </svg>
  );
};

Building.propTypes = {
  color: PropTypes.string
};

Building.defaultProps = {
  color: 'currentColor'
};

export default Building;
