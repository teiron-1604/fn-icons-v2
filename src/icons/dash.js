import React from 'react';
import PropTypes from 'prop-types';

const Dash = props => {
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
      <path d="M5 11h14v2H5v-2z"></path>
    </svg>
  );
};

Dash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Dash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Dash;
