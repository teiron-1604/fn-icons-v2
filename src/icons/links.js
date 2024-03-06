import React from 'react';
import PropTypes from 'prop-types';

const Links = props => {
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
      <path d="M13.06 8.11l1.415 1.415a7.002 7.002 0 010 9.9l-.354.353a7 7 0 11-9.9-9.9l1.415 1.415a5 5 0 107.07 7.071l.355-.354a5 5 0 000-7.07l-1.415-1.415 1.415-1.414h-.001zm6.718 6.011l-1.414-1.414a4.999 4.999 0 00-3.531-8.55 5 5 0 00-3.54 1.48l-.354.353a5 5 0 000 7.07l1.415 1.415-1.415 1.414-1.414-1.414a7 7 0 010-9.9l.354-.353a7 7 0 019.9 9.9h-.001z"></path>
    </svg>
  );
};

Links.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Links.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Links;
