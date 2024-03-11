import React from 'react';
import PropTypes from 'prop-types';

const DualSim1 = props => {
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
      <path d="M15 2l4.707 4.707a1 1 0 01.293.707V21a1 1 0 01-1 1H5a1 1 0 01-1-1V3a1 1 0 011-1h10zm-.829 2H6v16h12V7.829L14.171 4zM13 16h-2v-6h-1V8h3v8z"></path>
    </svg>
  );
};

DualSim1.propTypes = {
  color: PropTypes.string
};

DualSim1.defaultProps = {
  color: 'currentColor'
};

export default DualSim1;
