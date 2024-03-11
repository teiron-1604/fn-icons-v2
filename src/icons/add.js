import React from 'react';
import PropTypes from 'prop-types';

const Add = props => {
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
      <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2h6z"></path>
    </svg>
  );
};

Add.propTypes = {
  color: PropTypes.string
};

Add.defaultProps = {
  color: 'currentColor'
};

export default Add;
