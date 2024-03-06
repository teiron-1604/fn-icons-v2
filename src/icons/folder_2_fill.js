import React from 'react';
import PropTypes from 'prop-types';

const Folder2Fill = props => {
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
      <path d="M8 21V11h14v9a1 1 0 01-1 1H8zm-2 0H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2H21a1 1 0 011 1v3H7a1 1 0 00-1 1v11z"></path>
    </svg>
  );
};

Folder2Fill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Folder2Fill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Folder2Fill;
