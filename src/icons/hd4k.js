import React from 'react';
import PropTypes from 'prop-types';

const Hd4k = props => {
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
      <g clipPath="url(#clip0_18_15029)">
        <path d="M4 5v14h16V5H4zM3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm8.5 10.5h-1V15H9v-1.5H6V9h1.5v3H9V9h1.5v3h1v1.5zM18 15h-1.75l-1.75-2.25V15H13V9h1.5v2.25L16.25 9H18l-2.25 3L18 15z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15029">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Hd4k.propTypes = {
  color: PropTypes.string
};

Hd4k.defaultProps = {
  color: 'currentColor'
};

export default Hd4k;
