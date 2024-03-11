import React from 'react';
import PropTypes from 'prop-types';

const SoundModule = props => {
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
      <g clipPath="url(#clip0_18_15593)">
        <path d="M21 18v3h-2v-3h-2v-2h6v2h-2zM5 18v3H3v-3H1v-2h6v2H5zm6-12V3h2v3h2v2H9V6h2zm0 4h2v11h-2V10zm-8 4V3h2v11H3zm16 0V3h2v11h-2z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15593">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

SoundModule.propTypes = {
  color: PropTypes.string
};

SoundModule.defaultProps = {
  color: 'currentColor'
};

export default SoundModule;
