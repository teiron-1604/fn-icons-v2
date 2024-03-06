import React from 'react';
import PropTypes from 'prop-types';

const CloudFill = props => {
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
      <path d="M17 7a8.003 8.003 0 00-7.493 5.19l1.874.703A6.002 6.002 0 0123 15a6 6 0 01-6 6H7A6 6 0 015.008 9.339a7 7 0 0113.757-2.143A8.028 8.028 0 0017 7z"></path>
    </svg>
  );
};

CloudFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CloudFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CloudFill;
