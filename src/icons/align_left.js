import React from 'react';
import PropTypes from 'prop-types';

const AlignLeft = props => {
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
      <path d="M3 4h18v2H3V4zm0 15h14v2H3v-2zm0-5h18v2H3v-2zm0-5h14v2H3V9z"></path>
    </svg>
  );
};

AlignLeft.propTypes = {
  color: PropTypes.string
};

AlignLeft.defaultProps = {
  color: 'currentColor'
};

export default AlignLeft;
