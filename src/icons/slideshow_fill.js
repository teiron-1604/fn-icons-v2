import React from 'react';
import PropTypes from 'prop-types';

const SlideshowFill = props => {
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
      <path d="M13 18v2h4v2H7v-2h4v-2H3a1 1 0 01-1-1V4a1 1 0 011-1h18a1 1 0 011 1v13a1 1 0 01-1 1h-8zM10 7.5v6l5-3-5-3z"></path>
    </svg>
  );
};

SlideshowFill.propTypes = {
  color: PropTypes.string
};

SlideshowFill.defaultProps = {
  color: 'currentColor'
};

export default SlideshowFill;
