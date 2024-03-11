import React from 'react';
import PropTypes from 'prop-types';

const RecordCircle = props => {
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
      <g clipPath="url(#clip0_18_15436)">
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16.001A8 8 0 0012 20zm0-5a3 3 0 110-6 3 3 0 010 6z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15436">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

RecordCircle.propTypes = {
  color: PropTypes.string
};

RecordCircle.defaultProps = {
  color: 'currentColor'
};

export default RecordCircle;
