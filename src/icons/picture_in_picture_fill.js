import React from 'react';
import PropTypes from 'prop-types';

const PictureInPictureFill = props => {
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
      <path d="M21 3a1 1 0 011 1v7h-2V5H4v14h6v2H3a1 1 0 01-1-1V4a1 1 0 011-1h18zm0 10a1 1 0 011 1v6a1 1 0 01-1 1h-8a1 1 0 01-1-1v-6a1 1 0 011-1h8z"></path>
    </svg>
  );
};

PictureInPictureFill.propTypes = {
  color: PropTypes.string
};

PictureInPictureFill.defaultProps = {
  color: 'currentColor'
};

export default PictureInPictureFill;
