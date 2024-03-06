import React from 'react';
import PropTypes from 'prop-types';

const MicrophoneOff = props => {
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
      <path d="M16.425 17.84A8.942 8.942 0 0113 18.944V23h-2v-4.055A9.005 9.005 0 013.055 11H5.07a7.002 7.002 0 009.87 5.354l-1.55-1.55A5 5 0 017 10V8.414L1.393 2.808l1.415-1.415 19.8 19.8-1.416 1.414-4.767-4.768zm-7.392-7.393l2.52 2.52a3.002 3.002 0 01-2.52-2.52zm10.342 4.713l-1.443-1.442c.51-.81.856-1.73.997-2.718h2.016a8.951 8.951 0 01-1.57 4.16zm-2.91-2.909l-1.548-1.548c.054-.226.083-.46.083-.703V6a3 3 0 00-5.818-1.032L7.686 3.471A5 5 0 0117 6v4a4.982 4.982 0 01-.534 2.251z"></path>
    </svg>
  );
};

MicrophoneOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MicrophoneOff.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MicrophoneOff;
