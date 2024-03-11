import React from 'react';
import PropTypes from 'prop-types';

const LandscapeFill = props => {
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
      <path d="M16 21l-4.762-8.73L15 6l8 15h-7zM8 10l6 11H2l6-11zM5.5 8a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"></path>
    </svg>
  );
};

LandscapeFill.propTypes = {
  color: PropTypes.string
};

LandscapeFill.defaultProps = {
  color: 'currentColor'
};

export default LandscapeFill;
