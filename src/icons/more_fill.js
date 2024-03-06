import React from 'react';
import PropTypes from 'prop-types';

const MoreFill = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-5-8.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm6.5-1.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
      ></path>
    </svg>
  );
};

MoreFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MoreFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MoreFill;
