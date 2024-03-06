import React from 'react';
import PropTypes from 'prop-types';

const FilterOff = props => {
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
      <g clipPath="url(#clip0_18_14616)">
        <path d="M6.929.515L21.07 14.657l-1.414 1.414-3.823-3.822L15 13.5V22H9v-8.5L4 6H3V4h4.585l-2.07-2.07L6.929.514zM9.585 6H6.404L11 12.894V20h2v-7.106l1.392-2.087L9.585 6zM21 4v2h-1l-1.915 2.872-1.442-1.443L17.596 6h-2.383l-2-2H21z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14616">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FilterOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FilterOff.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FilterOff;
