import React from 'react';
import PropTypes from 'prop-types';

const PriceTag = props => {
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
      <path d="M10.9 2.1l9.9 1.415 1.413 9.9-9.192 9.192a1 1 0 01-1.414 0l-9.9-9.9a1 1 0 010-1.414L10.9 2.1zm.707 2.122L3.828 12l8.486 8.485 7.778-7.778-1.06-7.425-7.425-1.06zm2.12 6.364a2 2 0 112.83-2.829 2 2 0 01-2.83 2.83z"></path>
    </svg>
  );
};

PriceTag.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PriceTag.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PriceTag;
