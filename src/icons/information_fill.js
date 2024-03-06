import React from 'react';
import PropTypes from 'prop-types';

const InformationFill = props => {
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
      <g clipPath="url(#clip0_18_14780)">
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14780">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

InformationFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

InformationFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default InformationFill;
