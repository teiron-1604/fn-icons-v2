import React from 'react';
import PropTypes from 'prop-types';

const PictureInPicture = props => {
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
      <g clipPath="url(#clip0_18_15342)">
        <path d="M21 3a1 1 0 011 1v7h-2V5H4v14h6v2H3a1 1 0 01-1-1V4a1 1 0 011-1h18zm0 10a1 1 0 011 1v6a1 1 0 01-1 1h-8a1 1 0 01-1-1v-6a1 1 0 011-1h8zm-1 2h-6v4h6v-4z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15342">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

PictureInPicture.propTypes = {
  color: PropTypes.string
};

PictureInPicture.defaultProps = {
  color: 'currentColor'
};

export default PictureInPicture;
