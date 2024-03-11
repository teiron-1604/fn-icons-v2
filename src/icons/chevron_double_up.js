import React from 'react';
import PropTypes from 'prop-types';

const ChevronDoubleUp = props => {
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
      <path d="M7.2 10.8L12 6l4.8 4.8M7.2 18l4.8-4.8 4.8 4.8"></path>
    </svg>
  );
};

ChevronDoubleUp.propTypes = {
  color: PropTypes.string
};

ChevronDoubleUp.defaultProps = {
  color: 'currentColor'
};

export default ChevronDoubleUp;
