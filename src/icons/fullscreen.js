import React from 'react';
import PropTypes from 'prop-types';

const Fullscreen = props => {
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
      <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
    </svg>
  );
};

Fullscreen.propTypes = {
  color: PropTypes.string
};

Fullscreen.defaultProps = {
  color: 'currentColor'
};

export default Fullscreen;
