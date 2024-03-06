import React from 'react';
import PropTypes from 'prop-types';

const FastBackwardMiniFill = props => {
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
      <path d="M11 17.035a.5.5 0 01-.788.41l-7.133-5.037a.5.5 0 010-.816l7.133-5.036a.5.5 0 01.788.41v10.07zm1.079-4.627a.5.5 0 010-.816l7.133-5.036a.5.5 0 01.788.41v10.07a.5.5 0 01-.788.408l-7.133-5.036z"></path>
    </svg>
  );
};

FastBackwardMiniFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FastBackwardMiniFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FastBackwardMiniFill;
