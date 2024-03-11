import React from 'react';
import PropTypes from 'prop-types';

const ChevronDoubleRight = props => {
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
      <path d="M10.8 16.8L6 12l4.8-4.8m7.2 9.6L13.2 12 18 7.2"></path>
    </svg>
  );
};

ChevronDoubleRight.propTypes = {
  color: PropTypes.string
};

ChevronDoubleRight.defaultProps = {
  color: 'currentColor'
};

export default ChevronDoubleRight;
