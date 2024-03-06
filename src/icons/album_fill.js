import React from 'react';
import PropTypes from 'prop-types';

const AlbumFill = props => {
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
      <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 14c2.213 0 4-1.787 4-4s-1.787-4-4-4-4 1.787-4 4 1.787 4 4 4zm0-5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"></path>
    </svg>
  );
};

AlbumFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AlbumFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AlbumFill;
