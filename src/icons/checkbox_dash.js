import React from 'react';
import PropTypes from 'prop-types';

const CheckboxDash = props => {
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
      <g clipPath="url(#clip0_18_14435)">
        <path d="M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm1 2v14h14V5H5zm2 6h10v2H7v-2z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14435">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

CheckboxDash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CheckboxDash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CheckboxDash;
