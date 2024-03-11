import React from 'react';
import PropTypes from 'prop-types';

const RadioButtonFill = props => {
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
      <g clipPath="url(#clip0_18_14566)">
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-6a4 4 0 100-8 4 4 0 000 8z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14566">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

RadioButtonFill.propTypes = {
  color: PropTypes.string
};

RadioButtonFill.defaultProps = {
  color: 'currentColor'
};

export default RadioButtonFill;
