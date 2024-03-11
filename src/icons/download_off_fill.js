import React from 'react';
import PropTypes from 'prop-types';

const DownloadOffFill = props => {
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
        d="M21 19v2H3v-2h18zm-4.342-6.658L13.316 9H20l-3.342 3.342zm-2.814 2.814l2.307 2.307 1.414-1.414-13.15-13.15L3 4.312 7.687 9H4l8 8 1.844-1.844zM11 1v5.684l2 2V1h-2z"
      ></path>
    </svg>
  );
};

DownloadOffFill.propTypes = {
  color: PropTypes.string
};

DownloadOffFill.defaultProps = {
  color: 'currentColor'
};

export default DownloadOffFill;
