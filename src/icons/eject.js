import React from 'react';
import PropTypes from 'prop-types';

const Eject = props => {
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
      <g clipPath="url(#clip0_18_15155)">
        <path d="M7.737 13h8.526L12 6.606 7.737 13zm4.679-9.376l7.066 10.599a.5.5 0 01-.416.777H4.934a.5.5 0 01-.416-.777l7.066-10.599a.5.5 0 01.832 0zM5 17h14a1 1 0 110 2H5a1 1 0 010-2z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15155">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Eject.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Eject.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Eject;
