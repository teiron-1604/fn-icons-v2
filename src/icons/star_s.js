import React from 'react';
import PropTypes from 'prop-types';

const StarS = props => {
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
      <g clipPath="url(#clip0_18_14676)">
        <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7L12 17zm0-2.344l2.817 1.72-.766-3.21 2.507-2.147-3.29-.264L12 7.708l-1.268 3.047-3.29.264 2.507 2.147-.766 3.21L12 14.657v-.001z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14676">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

StarS.propTypes = {
  color: PropTypes.string
};

StarS.defaultProps = {
  color: 'currentColor'
};

export default StarS;
