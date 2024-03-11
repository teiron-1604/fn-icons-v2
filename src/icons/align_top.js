import React from 'react';
import PropTypes from 'prop-types';

const AlignTop = props => {
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
      <path d="M3 3h18v2H3V3zm5 8v10H6V11H3l4-4 4 4H8zm10 0v10h-2V11h-3l4-4 4 4h-3z"></path>
    </svg>
  );
};

AlignTop.propTypes = {
  color: PropTypes.string
};

AlignTop.defaultProps = {
  color: 'currentColor'
};

export default AlignTop;
