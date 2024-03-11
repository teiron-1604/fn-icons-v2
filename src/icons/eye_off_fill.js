import React from 'react';
import PropTypes from 'prop-types';

const EyeOffFill = props => {
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
      <path d="M4.52 5.934L1.393 2.808l1.415-1.415 19.799 19.8-1.415 1.414-3.31-3.31A10.95 10.95 0 0112 21c-5.392 0-9.878-3.88-10.819-9a10.982 10.982 0 013.34-6.066H4.52zm10.237 10.238l-1.464-1.464a3 3 0 01-4.001-4L7.828 9.242a5 5 0 006.929 6.93zM7.974 3.76C9.221 3.27 10.58 3 12 3c5.392 0 9.878 3.88 10.819 9a10.947 10.947 0 01-2.012 4.592l-3.86-3.86a5 5 0 00-5.68-5.68l-3.293-3.29V3.76z"></path>
    </svg>
  );
};

EyeOffFill.propTypes = {
  color: PropTypes.string
};

EyeOffFill.defaultProps = {
  color: 'currentColor'
};

export default EyeOffFill;
