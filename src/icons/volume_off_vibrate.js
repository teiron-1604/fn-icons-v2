import React from 'react';
import PropTypes from 'prop-types';

const VolumeOffVibrate = props => {
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
      <g clipPath="url(#clip0_18_15550)">
        <path d="M19.39 3.161l1.413 1.414-2.475 2.475 2.475 2.475L18.328 12l2.475 2.476-2.475 2.475 2.475 2.475-1.414 1.414-3.889-3.89 2.475-2.474L15.5 12l2.475-2.475L15.5 7.05l3.89-3.889zM13 19.945a.501.501 0 01-.817.387L6.89 16 3 16a1 1 0 01-1-1V9a1 1 0 011-1l2.584-.002-3.776-3.776 1.414-1.414L13 12.586v7.36zM7.584 9.998L4 10v4h3.603L11 16.78v-3.366L7.584 9.998zm5.303-6.26a.5.5 0 01.113.317v5.702l-2-2V7.22l-.296.241-1.421-1.42 2.9-2.373a.5.5 0 01.704.07z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15550">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

VolumeOffVibrate.propTypes = {
  color: PropTypes.string
};

VolumeOffVibrate.defaultProps = {
  color: 'currentColor'
};

export default VolumeOffVibrate;
