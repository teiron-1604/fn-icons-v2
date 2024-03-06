import React from 'react';
import PropTypes from 'prop-types';

const DownloadIn = props => {
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
      <path d="M13 10h5l-6 6-6-6h5V3h2v7zm-9 9h16v-7h2v8a1 1 0 01-1 1H3a1 1 0 01-1-1v-8h2v7z"></path>
    </svg>
  );
};

DownloadIn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DownloadIn.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DownloadIn;
