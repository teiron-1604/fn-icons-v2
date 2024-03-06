import React from 'react';
import PropTypes from 'prop-types';

const TodoFill = props => {
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
      <path d="M17 2h3a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1h3V0h2v2h6V0h2v2zM7 8v2h10V8H7zm0 4v2h10v-2H7z"></path>
    </svg>
  );
};

TodoFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TodoFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TodoFill;
