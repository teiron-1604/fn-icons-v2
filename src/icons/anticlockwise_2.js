import React from 'react';
import PropTypes from 'prop-types';

const Anticlockwise2 = props => {
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
      <path d="M13.414 6l1.829 1.828-1.415 1.415L9.586 5 13.828.757l1.415 1.415L13.414 4H16a5 5 0 015 5v4h-2V9a3 3 0 00-3-3h-2.586zM15 11v10a1 1 0 01-1 1H4a1 1 0 01-1-1V11a1 1 0 011-1h10a1 1 0 011 1zm-2 1H5v8h8v-8z"></path>
    </svg>
  );
};

Anticlockwise2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Anticlockwise2.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Anticlockwise2;
