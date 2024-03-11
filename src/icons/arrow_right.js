import React from 'react';
import PropTypes from 'prop-types';

const ArrowRight = props => {
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
      <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2h12.172z"></path>
    </svg>
  );
};

ArrowRight.propTypes = {
  color: PropTypes.string
};

ArrowRight.defaultProps = {
  color: 'currentColor'
};

export default ArrowRight;
