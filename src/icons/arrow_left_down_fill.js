import React from 'react';
import PropTypes from 'prop-types';

const ArrowLeftDownFill = props => {
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
      <g clipPath="url(#clip0_18_12552)">
        <path d="M12.36 13.05L17.31 18H5.998V6.688l4.95 4.95 5.656-5.657 1.415 1.414-5.659 5.655z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_12552">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ArrowLeftDownFill.propTypes = {
  color: PropTypes.string
};

ArrowLeftDownFill.defaultProps = {
  color: 'currentColor'
};

export default ArrowLeftDownFill;
