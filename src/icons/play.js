import React from 'react';
import PropTypes from 'prop-types';

const Play = props => {
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
        d="M9.25 17.263L17.144 12 9.25 6.737v10.526zm-.31.207zM7.25 6.363v11.274c0 1.437 1.602 2.295 2.799 1.497l8.454-5.636a1.8 1.8 0 000-2.996L10.05 4.866c-1.197-.798-2.799.06-2.799 1.497z"
      ></path>
    </svg>
  );
};

Play.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Play.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Play;
