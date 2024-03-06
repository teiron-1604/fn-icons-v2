import React from 'react';
import PropTypes from 'prop-types';

const SimCardFill = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M5 2h10l4.707 4.707a1 1 0 01.293.707V21a1 1 0 01-1 1H5a1 1 0 01-1-1V3a1 1 0 011-1zm3 10v6h8v-6H8z"></path>
    </svg>
  );
};

SimCardFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SimCardFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SimCardFill;
