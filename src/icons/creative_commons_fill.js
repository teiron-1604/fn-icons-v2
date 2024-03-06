import React from 'react';
import PropTypes from 'prop-types';

const CreativeCommonsFill = props => {
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zM9 8a4.001 4.001 0 00-3.355 6.176 4 4 0 006.024.803l.159-.151-1.414-1.414a2 2 0 11-.125-2.943l.126.116 1.414-1.414A3.988 3.988 0 009 8zm7 0a4.001 4.001 0 00-3.355 6.176 4 4 0 006.024.803l.159-.151-1.414-1.414a2 2 0 11-.125-2.943l.126.116 1.414-1.414A3.988 3.988 0 0016 8z"></path>
    </svg>
  );
};

CreativeCommonsFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CreativeCommonsFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CreativeCommonsFill;
