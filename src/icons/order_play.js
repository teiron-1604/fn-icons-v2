import React from 'react';
import PropTypes from 'prop-types';

const OrderPlay = props => {
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
      <g clipPath="url(#clip0_18_15613)">
        <path d="M17 4V2.068a.5.5 0 01.82-.385l4.12 3.433a.5.5 0 01-.321.884H2V4h15zM2 18h20v2H2v-2zm0-7h20v2H2v-2z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15613">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

OrderPlay.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

OrderPlay.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default OrderPlay;
