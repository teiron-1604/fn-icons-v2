import React from 'react';
import PropTypes from 'prop-types';

const DownloadOff = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 17H3v2h18v-2zM3.515 6.514L4.85 5.179l8.486 8.485L12 15 3.515 6.514zm12.4 4.572l4.57-4.571L19.071 5.1l-4.572 4.571L13 8.171V0h-2v6.172L5.365.537 3.951 1.951l13.15 13.15 1.415-1.414-2.602-2.601z"
      ></path>
    </svg>
  );
};

DownloadOff.propTypes = {
  color: PropTypes.string
};

DownloadOff.defaultProps = {
  color: 'currentColor'
};

export default DownloadOff;
