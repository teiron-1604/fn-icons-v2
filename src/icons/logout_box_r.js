import React from 'react';
import PropTypes from 'prop-types';

const LogoutBoxR = props => {
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
      <path d="M5 22a1 1 0 01-1-1V3a1 1 0 011-1h14a1 1 0 011 1v3h-2V4H6v16h12v-2h2v3a1 1 0 01-1 1H5zm13-6v-3h-7v-2h7V8l5 4-5 4z"></path>
    </svg>
  );
};

LogoutBoxR.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LogoutBoxR.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default LogoutBoxR;
