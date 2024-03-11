import React from 'react';
import PropTypes from 'prop-types';

const PlayMini = props => {
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
      <path d="M7 17.01V6.99a.6.6 0 01.933-.5l7.515 5.01a.6.6 0 010 1l-7.515 5.01a.6.6 0 01-.933-.5z"></path>
    </svg>
  );
};

PlayMini.propTypes = {
  color: PropTypes.string
};

PlayMini.defaultProps = {
  color: 'currentColor'
};

export default PlayMini;
