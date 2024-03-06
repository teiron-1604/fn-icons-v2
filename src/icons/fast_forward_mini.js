import React from 'react';
import PropTypes from 'prop-types';

const FastForwardMini = props => {
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
      <path d="M9.032 12L6 9.86v4.28L9.032 12zm-4.244 5.444A.5.5 0 014 17.035V6.965a.5.5 0 01.788-.409l7.133 5.036a.5.5 0 010 .816l-7.133 5.036zM15 14.14L18.032 12 15 9.86v4.28zm-2-7.175a.5.5 0 01.788-.409l7.133 5.036a.5.5 0 010 .816l-7.133 5.036a.5.5 0 01-.788-.409V6.965z"></path>
    </svg>
  );
};

FastForwardMini.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FastForwardMini.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FastForwardMini;
