import React from 'react';
import PropTypes from 'prop-types';

const ShareForwardFill = props => {
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
      <g clipPath="url(#clip0_18_14843)">
        <path d="M13 14h-2a8.999 8.999 0 00-7.968 4.81C3.011 18.54 3 18.27 3 18 3 12.477 7.477 8 13 8V3l10 8-10 8v-5z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14843">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ShareForwardFill.propTypes = {
  color: PropTypes.string
};

ShareForwardFill.defaultProps = {
  color: 'currentColor'
};

export default ShareForwardFill;
