import React from 'react';
import PropTypes from 'prop-types';

const ThumbUpFill = props => {
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
      <g clipPath="url(#clip0_18_14646)">
        <path d="M2 9h3v12H2a1 1 0 01-1-1V10a1 1 0 011-1zm5.293-1.293l6.4-6.4a.5.5 0 01.654-.047l.853.64a1.5 1.5 0 01.553 1.57L14.6 8H21a2 2 0 012 2v2.104a2 2 0 01-.15.762l-3.095 7.515a1 1 0 01-.925.62H8a1 1 0 01-1-1V8.413a1 1 0 01.293-.707z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14646">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ThumbUpFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ThumbUpFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ThumbUpFill;
