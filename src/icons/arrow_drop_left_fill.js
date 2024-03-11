import React from 'react';
import PropTypes from 'prop-types';

const ArrowDropLeftFill = props => {
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
      <path d="M9 12l4-4v8l-4-4z"></path>
    </svg>
  );
};

ArrowDropLeftFill.propTypes = {
  color: PropTypes.string
};

ArrowDropLeftFill.defaultProps = {
  color: 'currentColor'
};

export default ArrowDropLeftFill;
