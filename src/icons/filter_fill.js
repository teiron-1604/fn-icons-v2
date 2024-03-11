import React from 'react';
import PropTypes from 'prop-types';

const FilterFill = props => {
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
      <path d="M21 4v2h-1l-6 9v7h-4v-7L4 6H3V4h18z"></path>
    </svg>
  );
};

FilterFill.propTypes = {
  color: PropTypes.string
};

FilterFill.defaultProps = {
  color: 'currentColor'
};

export default FilterFill;
