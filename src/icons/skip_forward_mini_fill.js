import React from 'react';
import PropTypes from 'prop-types';

const SkipForwardMiniFill = props => {
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
      <path d="M7.788 17.444A.499.499 0 017 17.035V6.965a.5.5 0 01.788-.409l7.133 5.036a.5.5 0 010 .816l-7.133 5.036zM16 7a1 1 0 012 0v10a1 1 0 01-2 0V7z"></path>
    </svg>
  );
};

SkipForwardMiniFill.propTypes = {
  color: PropTypes.string
};

SkipForwardMiniFill.defaultProps = {
  color: 'currentColor'
};

export default SkipForwardMiniFill;
