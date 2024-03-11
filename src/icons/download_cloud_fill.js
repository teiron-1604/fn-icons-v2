import React from 'react';
import PropTypes from 'prop-types';

const DownloadCloudFill = props => {
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
      <path d="M7 20.981a6.5 6.5 0 01-2.936-12 8.001 8.001 0 0115.872 0 6.5 6.5 0 01-2.936 12v.02H7v-.02zm6-8.98V8h-2v4H8l4 5 4-5h-3z"></path>
    </svg>
  );
};

DownloadCloudFill.propTypes = {
  color: PropTypes.string
};

DownloadCloudFill.defaultProps = {
  color: 'currentColor'
};

export default DownloadCloudFill;
