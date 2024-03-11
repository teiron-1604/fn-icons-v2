import React from 'react';
import PropTypes from 'prop-types';

const ArrowDropDown = props => {
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
      <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414L12 15z"></path>
    </svg>
  );
};

ArrowDropDown.propTypes = {
  color: PropTypes.string
};

ArrowDropDown.defaultProps = {
  color: 'currentColor'
};

export default ArrowDropDown;
