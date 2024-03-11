import React from 'react';
import PropTypes from 'prop-types';

const PauseMini = props => {
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
      <path d="M15 7a1 1 0 012 0v10a1 1 0 01-2 0V7zM7 7a1 1 0 012 0v10a1 1 0 11-2 0V7z"></path>
    </svg>
  );
};

PauseMini.propTypes = {
  color: PropTypes.string
};

PauseMini.defaultProps = {
  color: 'currentColor'
};

export default PauseMini;
