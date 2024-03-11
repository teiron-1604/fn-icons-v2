import React from 'react';
import PropTypes from 'prop-types';

const Shuffle = props => {
  const { color, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <g clipPath="url(#clip0_18_15607)">
        <path d="M18 17.883V16l5 3-5 3v-2.09a9 9 0 01-6.997-5.365L11 14.54l-.003.006A9 9 0 012.725 20H2v-2h.725a7 7 0 006.434-4.243L9.912 12l-.753-1.757A7 7 0 002.725 6H2V4h.725a9 9 0 018.272 5.455L11 9.46l.003-.006A9 9 0 0118 4.09V2l5 3-5 3V6.117a7 7 0 00-5.159 4.126L12.088 12l.753 1.757A7 7 0 0018 17.883z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15607">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Shuffle.propTypes = {
  color: PropTypes.string
};

Shuffle.defaultProps = {
  color: 'currentColor'
};

export default Shuffle;
