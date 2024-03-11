import React from 'react';
import PropTypes from 'prop-types';

const CloudOffFill = props => {
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
      <path d="M3.515 2.1l19.092 19.092-1.415 1.415-2.014-2.015A5.984 5.984 0 0117 21H7A6 6 0 015.008 9.339a6.992 6.992 0 01.353-2.563L2.1 3.514 3.515 2.1zM17 9a6.003 6.003 0 015.204 8.989L14.01 9.796C14.89 9.29 15.91 9 17 9zm-5-7a7.003 7.003 0 016.765 5.195 8.027 8.027 0 00-6.206 1.15L7.694 3.48A6.97 6.97 0 0112 2z"></path>
    </svg>
  );
};

CloudOffFill.propTypes = {
  color: PropTypes.string
};

CloudOffFill.defaultProps = {
  color: 'currentColor'
};

export default CloudOffFill;
