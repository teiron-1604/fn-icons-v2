import React from 'react';
import PropTypes from 'prop-types';

const Unpin = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 4h18V2H3v2zm17.485 10.486l-1.335 1.335-8.486-8.485L12 6l8.485 8.486zm-12.4-4.572l-4.57 4.571L4.929 15.9l4.572-4.571 1.499 1.5V21h2v-6.172l5.635 5.635 1.414-1.414-13.15-13.15-1.415 1.414 2.602 2.601z"
      ></path>
    </svg>
  );
};

Unpin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Unpin.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Unpin;
