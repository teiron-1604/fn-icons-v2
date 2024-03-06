import React from 'react';
import PropTypes from 'prop-types';

const ServerUp = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M8 2v2H5l-.001 10h14L19 4h-3V2h4a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1h4zm10.999 14h-14L5 20h14l-.001-4zM17 17v2h-2v-2h2zM12 2l4 4h-3v5h-2V6H8l4-4z"></path>
    </svg>
  );
};

ServerUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ServerUp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ServerUp;
