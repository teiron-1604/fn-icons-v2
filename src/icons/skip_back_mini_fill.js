import React from 'react';
import PropTypes from 'prop-types';

const SkipBackMiniFill = props => {
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
      <path d="M7 6a1 1 0 011 1v10a1 1 0 11-2 0V7a1 1 0 011-1zm2.079 6.408a.5.5 0 010-.816l7.133-5.036a.5.5 0 01.788.409v10.07a.5.5 0 01-.788.409l-7.133-5.036z"></path>
    </svg>
  );
};

SkipBackMiniFill.propTypes = {
  color: PropTypes.string
};

SkipBackMiniFill.defaultProps = {
  color: 'currentColor'
};

export default SkipBackMiniFill;
