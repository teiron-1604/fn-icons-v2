import React from 'react';
import PropTypes from 'prop-types';

const IphoneFill = props => {
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
      <path d="M6 2h12a1 1 0 011 1v18a1 1 0 01-1 1H6a1 1 0 01-1-1V3a1 1 0 011-1zm6 15a1 1 0 100 2 1 1 0 000-2z"></path>
    </svg>
  );
};

IphoneFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IphoneFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IphoneFill;
