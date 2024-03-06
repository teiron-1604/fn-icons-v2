import React from 'react';
import PropTypes from 'prop-types';

const FingerpintFill = props => {
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
      <path d="M8.798 7.417c-.653.53-1.18 1.2-1.543 1.964-.362.764-.55 1.6-.55 2.448a13.553 13.553 0 01-1.37 5.96M13.132 21c1.336-2.867 2.214-7.875 2.017-9.17-.244-1.603-1.011-2.883-2.863-2.883-2.121 0-2.767 2.156-2.767 3.072m10.96 5.236c.346-1.787.52-3.604.52-5.426a8.889 8.889 0 00-2.551-6.243A8.657 8.657 0 0012.286 3c-2.311 0-4.527.93-6.162 2.586a8.889 8.889 0 00-2.552 6.243c.001 1.162-.192 2.315-.572 3.41m4.472 4.46a16.347 16.347 0 001.859-4.95m8.348.17c.127-1.025.19-2.058.187-3.09 0-1.5-.588-2.937-1.634-3.998a5.543 5.543 0 00-3.946-1.656 5.392 5.392 0 00-.697.04m5.51 11.791a33.314 33.314 0 01-.491 1.693m-6.431.881c1.111-2.007 2.114-5.334 2.114-8.72"></path>
    </svg>
  );
};

FingerpintFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FingerpintFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FingerpintFill;
