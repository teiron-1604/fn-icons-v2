import React from 'react';
import PropTypes from 'prop-types';

const ChevronDoubleLeft = props => {
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
      <path d="M13.2 7.2L18 12l-4.8 4.8M6 7.2l4.8 4.8L6 16.8"></path>
    </svg>
  );
};

ChevronDoubleLeft.propTypes = {
  color: PropTypes.string
};

ChevronDoubleLeft.defaultProps = {
  color: 'currentColor'
};

export default ChevronDoubleLeft;
