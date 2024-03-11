import React from 'react';
import PropTypes from 'prop-types';

const DualSim1Fill = props => {
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
      <path d="M15 2l4.707 4.707a1 1 0 01.293.707V21a1 1 0 01-1 1H5a1 1 0 01-1-1V3a1 1 0 011-1h10zm-2 6h-3v2h1v6h2V8z"></path>
    </svg>
  );
};

DualSim1Fill.propTypes = {
  color: PropTypes.string
};

DualSim1Fill.defaultProps = {
  color: 'currentColor'
};

export default DualSim1Fill;
