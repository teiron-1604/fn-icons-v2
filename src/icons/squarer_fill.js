import React from 'react';
import PropTypes from 'prop-types';

const SquarerFill = props => {
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
      <path d="M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1z"></path>
    </svg>
  );
};

SquarerFill.propTypes = {
  color: PropTypes.string
};

SquarerFill.defaultProps = {
  color: 'currentColor'
};

export default SquarerFill;
