import React from 'react';
import PropTypes from 'prop-types';

const SdCardFill = props => {
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
      <path d="M4.293 6.707L9 2h10a1 1 0 011 1v18a1 1 0 01-1 1H5a1 1 0 01-1-1V7.414a1 1 0 01.293-.707zM15 5v4h2V5h-2zm-3 0v4h2V5h-2zM9 5v4h2V5H9z"></path>
    </svg>
  );
};

SdCardFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SdCardFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SdCardFill;
