import React from 'react';
import PropTypes from 'prop-types';

const Microphone = props => {
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
      <path d="M12 3a3 3 0 00-3 3v4a3 3 0 006 0V6a3 3 0 00-3-3zm0-2a5 5 0 015 5v4a5 5 0 11-10 0V6a5 5 0 015-5zM3.055 11H5.07a7.002 7.002 0 0013.858 0h2.016A9.004 9.004 0 0113 18.945V23h-2v-4.055A9.004 9.004 0 013.055 11z"></path>
    </svg>
  );
};

Microphone.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Microphone.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Microphone;
