import React from 'react';
import PropTypes from 'prop-types';

const ArrowLeft = props => {
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
      <path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414L7.828 11z"></path>
    </svg>
  );
};

ArrowLeft.propTypes = {
  color: PropTypes.string
};

ArrowLeft.defaultProps = {
  color: 'currentColor'
};

export default ArrowLeft;
