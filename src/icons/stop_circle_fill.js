import React from 'react';
import PropTypes from 'prop-types';

const StopCircleFill = props => {
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
      <g clipPath="url(#clip0_18_15430)">
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM9 9v6h6V9H9z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15430">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

StopCircleFill.propTypes = {
  color: PropTypes.string
};

StopCircleFill.defaultProps = {
  color: 'currentColor'
};

export default StopCircleFill;
