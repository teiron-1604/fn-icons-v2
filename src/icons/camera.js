import React from 'react';
import PropTypes from 'prop-types';

const Camera = props => {
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
      <path d="M9.828 5l-2 2H4v12h16V7h-3.828l-2-2H9.828zM9 3h6l2 2h4a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1h4l2-2zm3 15a5.5 5.5 0 110-11 5.5 5.5 0 010 11zm0-2a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"></path>
    </svg>
  );
};

Camera.propTypes = {
  color: PropTypes.string
};

Camera.defaultProps = {
  color: 'currentColor'
};

export default Camera;
