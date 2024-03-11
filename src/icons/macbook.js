import React from 'react';
import PropTypes from 'prop-types';

const Macbook = props => {
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
      <path d="M4 5v11h16V5H4zm-2-.993C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007V18H2V4.007zM1 19h22v2H1v-2z"></path>
    </svg>
  );
};

Macbook.propTypes = {
  color: PropTypes.string
};

Macbook.defaultProps = {
  color: 'currentColor'
};

export default Macbook;
