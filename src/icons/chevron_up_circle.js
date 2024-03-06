import React from 'react';
import PropTypes from 'prop-types';

const ChevronUpCircle = props => {
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
      <path d="M7.583 12.296a1 1 0 001.28 1.536l-1.28-1.536zM12.2 9.749l.64-.768a1 1 0 00-1.28 0l.64.768zm3.338 4.083a1 1 0 001.28-1.536l-1.28 1.536zm-6.675 0l3.978-3.314-1.28-1.537-3.978 3.315 1.28 1.536zm2.697-3.314l3.978 3.314 1.28-1.536-3.977-3.315-1.28 1.537zM20 12a8 8 0 01-8 8v2c5.523 0 10-4.477 10-10h-2zm-8 8a8 8 0 01-8-8H2c0 5.523 4.477 10 10 10v-2zm-8-8a8 8 0 018-8V2C6.477 2 2 6.477 2 12h2zm8-8a8 8 0 018 8h2c0-5.523-4.477-10-10-10v2z"></path>
    </svg>
  );
};

ChevronUpCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChevronUpCircle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ChevronUpCircle;
