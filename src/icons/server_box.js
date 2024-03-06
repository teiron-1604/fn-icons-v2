import React from 'react';
import PropTypes from 'prop-types';

const ServerBox = props => {
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
      <path d="M5 14h14V4H5v10zm0 2v4h14v-4H5zM4 2h16a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1zm11 15h2v2h-2v-2z"></path>
    </svg>
  );
};

ServerBox.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ServerBox.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ServerBox;
