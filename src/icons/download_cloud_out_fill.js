import React from 'react';
import PropTypes from 'prop-types';

const DownloadCloudOutFill = props => {
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
      <path d="M13 13v5.585l1.828-1.828 1.415 1.415L12 22.414l-4.243-4.242 1.415-1.415L11 18.585V13h2zM12 2a7 7 0 016.954 6.194 5.5 5.5 0 01-.953 10.784L18 17a6 6 0 00-11.996-.225L6 17v1.978a5.5 5.5 0 01-.954-10.784A7 7 0 0112 2z"></path>
    </svg>
  );
};

DownloadCloudOutFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DownloadCloudOutFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DownloadCloudOutFill;
