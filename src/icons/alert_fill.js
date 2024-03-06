import React from 'react';
import PropTypes from 'prop-types';

const AlertFill = props => {
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
      <g clipPath="url(#clip0_18_14770)">
        <path d="M12.866 3l9.526 16.5a1 1 0 01-.866 1.5H2.474a1 1 0 01-.866-1.5L11.134 3a1 1 0 011.732 0zM11 16v2h2v-2h-2zm0-7v5h2V9h-2z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14770">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

AlertFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AlertFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AlertFill;
