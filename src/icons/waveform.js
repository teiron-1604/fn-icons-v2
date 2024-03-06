import React from 'react';
import PropTypes from 'prop-types';

const Waveform = props => {
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
      <path d="M5 7h2v10H5V7zm-4 3h2v4H1v-4zm8-8h2v18H9V2zm4 2h2v18h-2V4zm4 3h2v10h-2V7zm4 3h2v4h-2v-4z"></path>
    </svg>
  );
};

Waveform.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Waveform.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Waveform;
