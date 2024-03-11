import React from 'react';
import PropTypes from 'prop-types';

const CheckboxFill = props => {
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
      <g clipPath="url(#clip0_18_14578)">
        <path d="M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm7.003 13l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14578">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

CheckboxFill.propTypes = {
  color: PropTypes.string
};

CheckboxFill.defaultProps = {
  color: 'currentColor'
};

export default CheckboxFill;
