import React from 'react';
import PropTypes from 'prop-types';

const LogoutBoxLFill = props => {
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
      <path d="M5 2h14a1 1 0 011 1v18a1 1 0 01-1 1H5a1 1 0 01-1-1V3a1 1 0 011-1zm4 9V8l-5 4 5 4v-3h6v-2H9z"></path>
    </svg>
  );
};

LogoutBoxLFill.propTypes = {
  color: PropTypes.string
};

LogoutBoxLFill.defaultProps = {
  color: 'currentColor'
};

export default LogoutBoxLFill;
