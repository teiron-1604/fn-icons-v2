import React from 'react';
import PropTypes from 'prop-types';

const ArrowUp = props => {
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
      <path d="M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414L13 7.828z"></path>
    </svg>
  );
};

ArrowUp.propTypes = {
  color: PropTypes.string
};

ArrowUp.defaultProps = {
  color: 'currentColor'
};

export default ArrowUp;
