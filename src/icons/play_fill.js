import React from 'react';
import PropTypes from 'prop-types';

const PlayFill = props => {
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
      <path d="M7.25 17.637V6.363c0-1.437 1.602-2.295 2.799-1.497l8.454 5.636a1.8 1.8 0 010 2.996l-8.454 5.636c-1.197.798-2.799-.06-2.799-1.497z"></path>
    </svg>
  );
};

PlayFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PlayFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PlayFill;
