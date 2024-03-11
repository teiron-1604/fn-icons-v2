import React from 'react';
import PropTypes from 'prop-types';

const VolumeVibrateFill = props => {
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
      <g clipPath="url(#clip0_18_15544)">
        <path d="M19.39 3.16l1.413 1.415-2.475 2.475 2.475 2.475L18.328 12l2.475 2.476-2.475 2.475 2.475 2.475-1.414 1.414-3.889-3.89 2.475-2.474L15.5 12l2.475-2.475L15.5 7.05l3.89-3.89zm-6.503.579a.5.5 0 01.113.316v15.89a.5.5 0 01-.817.387L6.89 15.999H3a1 1 0 01-1-1V9a1 1 0 011-1h3.889l5.294-4.331a.5.5 0 01.704.07z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15544">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

VolumeVibrateFill.propTypes = {
  color: PropTypes.string
};

VolumeVibrateFill.defaultProps = {
  color: 'currentColor'
};

export default VolumeVibrateFill;
