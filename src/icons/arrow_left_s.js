import React from 'react';
import PropTypes from 'prop-types';

const ArrowLeftS = props => {
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
      <path d="M10.94 12l4.95 4.95-1.415 1.414L8.111 12l6.364-6.364L15.89 7.05 10.94 12z"></path>
    </svg>
  );
};

ArrowLeftS.propTypes = {
  color: PropTypes.string
};

ArrowLeftS.defaultProps = {
  color: 'currentColor'
};

export default ArrowLeftS;
