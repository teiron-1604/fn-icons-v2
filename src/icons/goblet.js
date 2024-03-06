import React from 'react';
import PropTypes from 'prop-types';

const Goblet = props => {
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
      <path d="M11 19v-5.111L3 5V3h18v2l-8 8.889V19h5v2H6v-2h5zM7.49 7h9.02l1.8-2H5.69l1.8 2zm1.8 2L12 12.01 14.71 9H9.29z"></path>
    </svg>
  );
};

Goblet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Goblet.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Goblet;
