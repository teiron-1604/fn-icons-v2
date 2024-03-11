import React from 'react';
import PropTypes from 'prop-types';

const Slideshow = props => {
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
      <path d="M13 18v2h4v2H7v-2h4v-2H3a1 1 0 01-1-1V4a1 1 0 011-1h18a1 1 0 011 1v13a1 1 0 01-1 1h-8zM4 5v11h16V5H4zm6 2.5l5 3-5 3v-6z"></path>
    </svg>
  );
};

Slideshow.propTypes = {
  color: PropTypes.string
};

Slideshow.defaultProps = {
  color: 'currentColor'
};

export default Slideshow;
