import React from 'react';
import PropTypes from 'prop-types';

const DownloadInFill = props => {
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
      <path d="M4 19h16v-7h2v8a1 1 0 01-1 1H3a1 1 0 01-1-1v-8h2v7zM14 9h5l-7 7-7-7h5V3h4v6z"></path>
    </svg>
  );
};

DownloadInFill.propTypes = {
  color: PropTypes.string
};

DownloadInFill.defaultProps = {
  color: 'currentColor'
};

export default DownloadInFill;
