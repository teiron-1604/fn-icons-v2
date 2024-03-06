import React from 'react';
import PropTypes from 'prop-types';

const PlayListAdd = props => {
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
      <g clipPath="url(#clip0_18_15619)">
        <path d="M2 18h10v2H2v-2zm0-7h20v2H2v-2zm0-7h20v2H2V4zm16 14v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15619">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

PlayListAdd.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PlayListAdd.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PlayListAdd;
