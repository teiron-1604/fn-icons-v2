import React from 'react';
import PropTypes from 'prop-types';

const AlignBottom = props => {
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
      <path d="M3 19h18v2H3v-2zm5-6h3l-4 4-4-4h3V3h2v10zm10 0h3l-4 4-4-4h3V3h2v10z"></path>
    </svg>
  );
};

AlignBottom.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AlignBottom.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AlignBottom;
