import React from 'react';
import PropTypes from 'prop-types';

const Dvd = props => {
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
      <g clipPath="url(#clip0_18_15143)">
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16.001A8 8 0 0012 20zm1-9h3l-5 7v-5H8l5-7v5z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15143">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Dvd.propTypes = {
  color: PropTypes.string
};

Dvd.defaultProps = {
  color: 'currentColor'
};

export default Dvd;
