import React from 'react';
import PropTypes from 'prop-types';

const PriceTagFill = props => {
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
      <path d="M10.9 2.1l9.9 1.415 1.413 9.9-9.192 9.192a1 1 0 01-1.414 0l-9.9-9.9a1 1 0 010-1.414L10.9 2.1zm2.828 8.486a1.999 1.999 0 003.414-1.415 2 2 0 10-3.414 1.415z"></path>
    </svg>
  );
};

PriceTagFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PriceTagFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PriceTagFill;
