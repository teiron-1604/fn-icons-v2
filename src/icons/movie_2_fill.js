import React from 'react';
import PropTypes from 'prop-types';

const Movie2Fill = props => {
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
      <path d="M18.001 20H20v2h-8C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.985 9.985 0 01-3.999 8zM12 10a2 2 0 100-4 2 2 0 000 4zm-4 4a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4zm-4 4a2 2 0 100-4 2 2 0 000 4z"></path>
    </svg>
  );
};

Movie2Fill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Movie2Fill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Movie2Fill;
