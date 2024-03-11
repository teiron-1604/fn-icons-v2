import React from 'react';
import PropTypes from 'prop-types';

const LockOpen = props => {
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
      <path d="M7 10h13a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V11a1 1 0 011-1h1V9a7 7 0 0113.262-3.13l-1.789.893A5 5 0 007 9v1zm-2 2v8h14v-8H5zm5 3h4v2h-4v-2z"></path>
    </svg>
  );
};

LockOpen.propTypes = {
  color: PropTypes.string
};

LockOpen.defaultProps = {
  color: 'currentColor'
};

export default LockOpen;
