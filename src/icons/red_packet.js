import React from 'react';
import PropTypes from 'prop-types';

const RedPacket = props => {
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
      <path d="M14.173 9.763A9.98 9.98 0 0019 7.141V4H5v3.141a9.98 9.98 0 004.827 2.622 2.5 2.5 0 014.346 0zm.208 2a2.5 2.5 0 01-4.762 0A11.94 11.94 0 015 9.749V20h14V9.748a11.94 11.94 0 01-4.619 2.016v-.001zM4 2h16a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1z"></path>
    </svg>
  );
};

RedPacket.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RedPacket.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RedPacket;
