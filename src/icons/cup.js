import React from 'react';
import PropTypes from 'prop-types';

const Cup = props => {
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
      <path d="M16 13V5H6v8a2 2 0 002 2h6a2 2 0 002-2zM5 3h15a2 2 0 012 2v3a2 2 0 01-2 2h-2v3a4 4 0 01-4 4H8a4 4 0 01-4-4V4a1 1 0 011-1zm13 2v3h2V5h-2zM2 19h18v2H2v-2z"></path>
    </svg>
  );
};

Cup.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Cup.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Cup;
