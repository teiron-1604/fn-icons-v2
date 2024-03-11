import React from 'react';
import PropTypes from 'prop-types';

const ServerDown = props => {
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
      <path d="M9 2v2H5l-.001 10h14L19 4h-4V2h5a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1h5zm9.999 14h-14L5 20h14l-.001-4zM17 17v2h-2v-2h2zM13 2v5h3l-4 4-4-4h3V2h2z"></path>
    </svg>
  );
};

ServerDown.propTypes = {
  color: PropTypes.string
};

ServerDown.defaultProps = {
  color: 'currentColor'
};

export default ServerDown;
