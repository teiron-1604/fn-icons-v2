import React from 'react';
import PropTypes from 'prop-types';

const RefreshFill = props => {
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
      <g clipPath="url(#clip0_18_14996)">
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm4.82-4.924A7 7 0 009.032 5.658l.975 1.755A5 5 0 0117 12h-3l2.82 5.076zm-1.852 1.266l-.975-1.755A5 5 0 017 12h3L7.18 6.924a7 7 0 007.788 11.418z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14996">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

RefreshFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RefreshFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RefreshFill;
