import React from 'react';
import PropTypes from 'prop-types';

const FileMusic = props => {
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
      <path d="M16 8v2h-3v4.5a2.5 2.5 0 11-2-2.45V8h4V4H5v16h14V8h-3zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0120.007 22H3.993A1 1 0 013 21.008V2.992z"></path>
    </svg>
  );
};

FileMusic.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FileMusic.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FileMusic;
