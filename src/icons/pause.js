import React from 'react';
import PropTypes from 'prop-types';

const Pause = props => {
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
      <path d="M6 5h2v14H6V5zm10 0h2v14h-2V5z"></path>
    </svg>
  );
};

Pause.propTypes = {
  color: PropTypes.string
};

Pause.defaultProps = {
  color: 'currentColor'
};

export default Pause;
