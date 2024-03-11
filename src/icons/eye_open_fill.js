import React from 'react';
import PropTypes from 'prop-types';

const EyeOpenFill = props => {
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
      <path d="M1.181 12C2.121 6.88 6.608 3 12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9zM12 17a5 5 0 100-10 5 5 0 000 10zm0-2a3 3 0 110-6 3 3 0 010 6z"></path>
    </svg>
  );
};

EyeOpenFill.propTypes = {
  color: PropTypes.string
};

EyeOpenFill.defaultProps = {
  color: 'currentColor'
};

export default EyeOpenFill;
