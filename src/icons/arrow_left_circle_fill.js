import React from 'react';
import PropTypes from 'prop-types';

const ArrowLeftCircleFill = props => {
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
      <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 9V8l-4 4 4 4v-3h4v-2h-4z"></path>
    </svg>
  );
};

ArrowLeftCircleFill.propTypes = {
  color: PropTypes.string
};

ArrowLeftCircleFill.defaultProps = {
  color: 'currentColor'
};

export default ArrowLeftCircleFill;
