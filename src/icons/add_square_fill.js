import React from 'react';
import PropTypes from 'prop-types';

const AddSquareFill = props => {
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
      <path d="M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm7 8H7v2h4v4h2v-4h4v-2h-4V7h-2v4z"></path>
    </svg>
  );
};

AddSquareFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AddSquareFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AddSquareFill;
