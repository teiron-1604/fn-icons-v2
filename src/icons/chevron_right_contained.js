import React from 'react';
import PropTypes from 'prop-types';

const ChevronRightContained = props => {
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
      <path d="M11.643 7.183a1 1 0 00-1.537 1.28l1.537-1.28zm2.546 4.617l.768.64a1 1 0 000-1.28l-.768.64zm-4.083 3.338a1 1 0 001.537 1.28l-1.537-1.28zm0-6.675l3.315 3.978 1.536-1.28-3.314-3.978-1.537 1.28zm3.315 2.697l-3.315 3.978 1.537 1.28 3.314-3.977-1.536-1.28zM12 4a8 8 0 018 8h2c0-5.523-4.477-10-10-10v2zm8 8a8 8 0 01-8 8v2c5.523 0 10-4.477 10-10h-2zm-8 8a8 8 0 01-8-8H2c0 5.523 4.477 10 10 10v-2zm-8-8a8 8 0 018-8V2C6.477 2 2 6.477 2 12h2z"></path>
    </svg>
  );
};

ChevronRightContained.propTypes = {
  color: PropTypes.string
};

ChevronRightContained.defaultProps = {
  color: 'currentColor'
};

export default ChevronRightContained;
