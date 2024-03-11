import React from 'react';
import PropTypes from 'prop-types';

const Dash = props => {
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
      <path d="M5 11h14v2H5v-2z"></path>
    </svg>
  );
};

Dash.propTypes = {
  color: PropTypes.string
};

Dash.defaultProps = {
  color: 'currentColor'
};

export default Dash;
