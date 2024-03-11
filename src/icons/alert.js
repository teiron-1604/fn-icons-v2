import React from 'react';
import PropTypes from 'prop-types';

const Alert = props => {
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
      <g clipPath="url(#clip0_18_14764)">
        <path d="M12.866 3l9.526 16.5a1 1 0 01-.866 1.5H2.474a1 1 0 01-.866-1.5L11.134 3a1 1 0 011.732 0zm-8.66 16h15.588L12 5.5 4.206 19zM11 16h2v2h-2v-2zm0-7h2v5h-2V9z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14764">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Alert.propTypes = {
  color: PropTypes.string
};

Alert.defaultProps = {
  color: 'currentColor'
};

export default Alert;
