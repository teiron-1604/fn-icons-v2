import React from 'react';
import PropTypes from 'prop-types';

const MicrophoneFill = props => {
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
      <path d="M12 1a5 5 0 015 5v4a5 5 0 11-10 0V6a5 5 0 015-5zM3.055 11H5.07a7.002 7.002 0 0013.858 0h2.016A9.003 9.003 0 0113 18.945V23h-2v-4.055A9.004 9.004 0 013.055 11z"></path>
    </svg>
  );
};

MicrophoneFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MicrophoneFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MicrophoneFill;
