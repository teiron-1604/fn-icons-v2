import React from 'react';
import PropTypes from 'prop-types';

const CheckboxDashFill = props => {
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
      <path d="M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm3 8v2h10v-2H7z"></path>
    </svg>
  );
};

CheckboxDashFill.propTypes = {
  color: PropTypes.string
};

CheckboxDashFill.defaultProps = {
  color: 'currentColor'
};

export default CheckboxDashFill;
