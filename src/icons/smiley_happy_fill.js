import React from 'react';
import PropTypes from 'prop-types';

const SmileyHappyFill = props => {
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
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-4-9a4 4 0 108 0H8zm0-2a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm8 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
    </svg>
  );
};

SmileyHappyFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SmileyHappyFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SmileyHappyFill;
