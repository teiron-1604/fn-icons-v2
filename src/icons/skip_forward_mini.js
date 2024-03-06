import React from 'react';
import PropTypes from 'prop-types';

const SkipForwardMini = props => {
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
      <path d="M12.032 12L9 9.86v4.28L12.032 12zM7.5 17.535a.5.5 0 01-.5-.5V6.965a.5.5 0 01.788-.409l7.133 5.036a.5.5 0 010 .816l-7.133 5.036a.5.5 0 01-.288.091zM16 7a1 1 0 012 0v10a1 1 0 01-2 0V7z"></path>
    </svg>
  );
};

SkipForwardMini.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SkipForwardMini.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SkipForwardMini;
