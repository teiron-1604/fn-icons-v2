import React from 'react';
import PropTypes from 'prop-types';

const Check = props => {
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
      <path d="M10.5 15.172l9.192-9.193 1.415 1.414L10.5 18l-6.364-6.364 1.414-1.414 4.95 4.95z"></path>
    </svg>
  );
};

Check.propTypes = {
  color: PropTypes.string
};

Check.defaultProps = {
  color: 'currentColor'
};

export default Check;
