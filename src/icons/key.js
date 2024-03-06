import React from 'react';
import PropTypes from 'prop-types';

const Key = props => {
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
      <path d="M12.917 13A6.002 6.002 0 011 12a6 6 0 0111.917-1H23v2h-2v4h-2v-4h-2v4h-2v-4h-2.083zM7 16a4 4 0 100-8 4 4 0 000 8z"></path>
    </svg>
  );
};

Key.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Key.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Key;
