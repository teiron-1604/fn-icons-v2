import React from 'react';
import PropTypes from 'prop-types';

const ChevronLeftContained = props => {
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
      <path d="M12.296 16.417a1 1 0 101.536-1.28l-1.536 1.28zM9.749 11.8l-.768-.64a1 1 0 000 1.28l.768-.64zm4.083-3.338a1 1 0 00-1.536-1.28l1.536 1.28zm0 6.675l-3.314-3.978-1.537 1.28 3.315 3.978 1.536-1.28zm-3.314-2.697l3.314-3.978-1.536-1.28-3.315 3.977 1.537 1.28zM12 4a8 8 0 018 8h2c0-5.523-4.477-10-10-10v2zm8 8a8 8 0 01-8 8v2c5.523 0 10-4.477 10-10h-2zm-8 8a8 8 0 01-8-8H2c0 5.523 4.477 10 10 10v-2zm-8-8a8 8 0 018-8V2C6.477 2 2 6.477 2 12h2z"></path>
    </svg>
  );
};

ChevronLeftContained.propTypes = {
  color: PropTypes.string
};

ChevronLeftContained.defaultProps = {
  color: 'currentColor'
};

export default ChevronLeftContained;
