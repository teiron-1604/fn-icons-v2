import React from 'react';
import PropTypes from 'prop-types';

const LogoutBoxL = props => {
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
      <path d="M4 18h2v2h12V4H6v2H4V3a1 1 0 011-1h14a1 1 0 011 1v18a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zm2-7h7v2H6v3l-5-4 5-4v3z"></path>
    </svg>
  );
};

LogoutBoxL.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LogoutBoxL.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default LogoutBoxL;
