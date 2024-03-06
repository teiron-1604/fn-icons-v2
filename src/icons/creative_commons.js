import React from 'react';
import PropTypes from 'prop-types';

const CreativeCommons = props => {
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zM9 8c1.105 0 2.105.448 2.829 1.173l-1.414 1.414a2 2 0 10-.001 2.828l1.414 1.413A4 4 0 015 12c0-2.208 1.792-4 4-4zm7 0c1.105 0 2.105.448 2.829 1.173l-1.414 1.414a2 2 0 10-.001 2.828l1.414 1.413A4 4 0 0112 12c0-2.208 1.792-4 4-4z"></path>
    </svg>
  );
};

CreativeCommons.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CreativeCommons.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CreativeCommons;
