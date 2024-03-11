import React from 'react';
import PropTypes from 'prop-types';

const Emphasis = props => {
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
      <path d="M12 19a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-5.5 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm11 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM18 3v2H8v4h9v2H8v4h10v2H6V3h12z"></path>
    </svg>
  );
};

Emphasis.propTypes = {
  color: PropTypes.string
};

Emphasis.defaultProps = {
  color: 'currentColor'
};

export default Emphasis;
