import React from 'react';
import PropTypes from 'prop-types';

const ShieldFill = props => {
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
      <path d="M3.783 2.826L12 1l8.217 1.826a1 1 0 01.783.976v9.987a6 6 0 01-2.672 4.992L12 23l-6.328-4.219A6 6 0 013 13.79V3.802a1 1 0 01.783-.976z"></path>
    </svg>
  );
};

ShieldFill.propTypes = {
  color: PropTypes.string
};

ShieldFill.defaultProps = {
  color: 'currentColor'
};

export default ShieldFill;
