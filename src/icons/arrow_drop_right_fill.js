import React from 'react';
import PropTypes from 'prop-types';

const ArrowDropRightFill = props => {
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
      <path d="M14 12l-4 4V8l4 4z"></path>
    </svg>
  );
};

ArrowDropRightFill.propTypes = {
  color: PropTypes.string
};

ArrowDropRightFill.defaultProps = {
  color: 'currentColor'
};

export default ArrowDropRightFill;
