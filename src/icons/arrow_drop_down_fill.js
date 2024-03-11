import React from 'react';
import PropTypes from 'prop-types';

const ArrowDropDownFill = props => {
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
      <path d="M12 14l-4-4h8l-4 4z"></path>
    </svg>
  );
};

ArrowDropDownFill.propTypes = {
  color: PropTypes.string
};

ArrowDropDownFill.defaultProps = {
  color: 'currentColor'
};

export default ArrowDropDownFill;
