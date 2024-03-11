import React from 'react';
import PropTypes from 'prop-types';

const ArrowDownFill = props => {
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
      <path d="M13 12h7l-8 8-8-8h7V4h2v8z"></path>
    </svg>
  );
};

ArrowDownFill.propTypes = {
  color: PropTypes.string
};

ArrowDownFill.defaultProps = {
  color: 'currentColor'
};

export default ArrowDownFill;
