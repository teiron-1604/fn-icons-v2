import React from 'react';
import PropTypes from 'prop-types';

const FilterOffFill = props => {
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
      <path d="M6.929.515L21.07 14.657l-1.414 1.414-3.823-3.822L14 14.999v7h-4v-7L4 6H3V4h4.585l-2.07-2.07L6.929.515zM21 4v2h-1l-1.915 2.872L13.213 4H21z"></path>
    </svg>
  );
};

FilterOffFill.propTypes = {
  color: PropTypes.string
};

FilterOffFill.defaultProps = {
  color: 'currentColor'
};

export default FilterOffFill;
