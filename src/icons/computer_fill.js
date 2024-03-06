import React from 'react';
import PropTypes from 'prop-types';

const ComputerFill = props => {
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
      <g clipPath="url(#clip0_18_13381)">
        <path d="M13 18v2h4v2H7v-2h4v-2H2.992A1 1 0 012 16.993V4.007C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007v12.986c0 .556-.455 1.007-.992 1.007H13z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13381">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ComputerFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ComputerFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ComputerFill;
