import React from 'react';
import PropTypes from 'prop-types';

const DashboardFill = props => {
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
      <g clipPath="url(#clip0_18_14483)">
        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14483">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

DashboardFill.propTypes = {
  color: PropTypes.string
};

DashboardFill.defaultProps = {
  color: 'currentColor'
};

export default DashboardFill;
