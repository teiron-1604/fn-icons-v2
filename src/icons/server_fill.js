import React from 'react';
import PropTypes from 'prop-types';

const ServerFill = props => {
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
      <path d="M4 3h16a1 1 0 011 1v7H3V4a1 1 0 011-1zM3 13h18v7a1 1 0 01-1 1H4a1 1 0 01-1-1v-7zm4 3v2h3v-2H7zM7 6v2h3V6H7z"></path>
    </svg>
  );
};

ServerFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ServerFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ServerFill;
