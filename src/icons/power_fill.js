import React from 'react';
import PropTypes from 'prop-types';

const PowerFill = props => {
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
      <g clipPath="url(#clip0_18_13587)">
        <path d="M11 2.05V12h2V2.05c5.053.5 9 4.765 9 9.95 0 5.523-4.477 10-10 10S2 17.523 2 12c0-5.185 3.947-9.45 9-9.95z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13587">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

PowerFill.propTypes = {
  color: PropTypes.string
};

PowerFill.defaultProps = {
  color: 'currentColor'
};

export default PowerFill;
