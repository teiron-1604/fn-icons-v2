import React from 'react';
import PropTypes from 'prop-types';

const ChevronDoubleDown = props => {
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
      <path d="M16.8 13.2L12 18l-4.8-4.8M16.8 6L12 10.8 7.2 6"></path>
    </svg>
  );
};

ChevronDoubleDown.propTypes = {
  color: PropTypes.string
};

ChevronDoubleDown.defaultProps = {
  color: 'currentColor'
};

export default ChevronDoubleDown;
