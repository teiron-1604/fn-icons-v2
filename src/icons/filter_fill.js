import React from 'react';
import PropTypes from 'prop-types';

const FilterFill = props => {
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
      <path d="M21 4v2h-1l-6 9v7h-4v-7L4 6H3V4h18z"></path>
    </svg>
  );
};

FilterFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FilterFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FilterFill;
