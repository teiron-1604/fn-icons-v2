import React from 'react';
import PropTypes from 'prop-types';

const Trophy = props => {
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
      <path d="M13 16.938V19h5v2H6v-2h5v-2.062A8 8 0 014 9V3h16v6a8 8 0 01-7 7.938zM6 5v4a6 6 0 1012 0V5H6zM1 5h2v4H1V5zm20 0h2v4h-2V5z"></path>
    </svg>
  );
};

Trophy.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Trophy.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Trophy;
