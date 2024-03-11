import React from 'react';
import PropTypes from 'prop-types';

const StarSFill = props => {
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
      <g clipPath="url(#clip0_18_14688)">
        <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7L12 17z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14688">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

StarSFill.propTypes = {
  color: PropTypes.string
};

StarSFill.defaultProps = {
  color: 'currentColor'
};

export default StarSFill;
