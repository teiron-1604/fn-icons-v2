import React from 'react';
import PropTypes from 'prop-types';

const StarSHalf = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <g clipPath="url(#clip0_18_14682)">
        <path d="M12 14.656l2.817 1.72-.766-3.21 2.507-2.147-3.29-.264L12 7.708v6.948zM12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7L12 17z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14682">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

StarSHalf.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

StarSHalf.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default StarSHalf;
