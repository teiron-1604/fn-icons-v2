import React from 'react';
import PropTypes from 'prop-types';

const UploadInFill = props => {
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
      <path d="M4 19h16v-7h2v8a1 1 0 01-1 1H3a1 1 0 01-1-1v-8h2v7zM14 9v6h-4V9H5l7-7 7 7h-5z"></path>
    </svg>
  );
};

UploadInFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UploadInFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UploadInFill;
