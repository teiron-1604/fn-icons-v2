import React from 'react';
import PropTypes from 'prop-types';

const RocketFill = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M8.498 20h7.004A6.523 6.523 0 0112 23.502 6.523 6.523 0 018.498 20zM18 14.805l2 2.268V19H4v-1.927l2-2.268V9c0-3.483 2.504-6.447 6-7.545C15.496 2.553 18 5.517 18 9v5.805zM12 11a2 2 0 100-4 2 2 0 000 4z"></path>
    </svg>
  );
};

RocketFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RocketFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RocketFill;
