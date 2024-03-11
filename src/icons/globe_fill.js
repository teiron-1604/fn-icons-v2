import React from 'react';
import PropTypes from 'prop-types';

const GlobeFill = props => {
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
      <path d="M2.05 13h5.477a17.9 17.9 0 002.925 8.88A10.005 10.005 0 012.05 13zm0-2a10.005 10.005 0 018.402-8.88A17.9 17.9 0 007.527 11H2.05zm19.9 0h-5.477a17.9 17.9 0 00-2.925-8.88A10.005 10.005 0 0121.95 11zm0 2a10.006 10.006 0 01-8.402 8.88A17.9 17.9 0 0016.473 13h5.477zM9.53 13h4.94A15.907 15.907 0 0112 20.592 15.908 15.908 0 019.53 13zm0-2A15.908 15.908 0 0112 3.408 15.907 15.907 0 0114.47 11H9.53z"></path>
    </svg>
  );
};

GlobeFill.propTypes = {
  color: PropTypes.string
};

GlobeFill.defaultProps = {
  color: 'currentColor'
};

export default GlobeFill;
