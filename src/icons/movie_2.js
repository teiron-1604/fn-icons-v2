import React from 'react';
import PropTypes from 'prop-types';

const Movie2 = props => {
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
      <path d="M12 20h8v2h-8C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.956 9.956 0 01-2 6h-2.708A8 8 0 1012 20zm0-10a2 2 0 110-4 2 2 0 010 4zm-4 4a2 2 0 110-4 2 2 0 010 4zm8 0a2 2 0 110-4 2 2 0 010 4zm-4 4a2 2 0 110-4 2 2 0 010 4z"></path>
    </svg>
  );
};

Movie2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Movie2.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Movie2;
