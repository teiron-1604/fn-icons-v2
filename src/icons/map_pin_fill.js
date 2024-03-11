import React from 'react';
import PropTypes from 'prop-types';

const MapPinFill = props => {
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
      <g clipPath="url(#clip0_18_12811)">
        <path d="M11 19.945A9.001 9.001 0 0112 2a9 9 0 011 17.945V24h-2v-4.055z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_12811">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

MapPinFill.propTypes = {
  color: PropTypes.string
};

MapPinFill.defaultProps = {
  color: 'currentColor'
};

export default MapPinFill;
