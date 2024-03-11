import React from 'react';
import PropTypes from 'prop-types';

const GridFill = props => {
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
      <path d="M3 3h8v8H3V3zm0 10h8v8H3v-8zM13 3h8v8h-8V3zm0 10h8v8h-8v-8z"></path>
    </svg>
  );
};

GridFill.propTypes = {
  color: PropTypes.string
};

GridFill.defaultProps = {
  color: 'currentColor'
};

export default GridFill;
