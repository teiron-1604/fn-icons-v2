import React from 'react';
import PropTypes from 'prop-types';

const FastBackwardMini = props => {
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
      <path d="M9 9.86L5.968 12 9 14.14V9.86zm1.908 7.463a.5.5 0 01-.696.12l-7.133-5.035a.5.5 0 010-.816l7.133-5.036a.5.5 0 01.788.41v10.07a.5.5 0 01-.092.287zM18 14.14V9.86L14.968 12 18 14.14zm-5.921-1.732a.5.5 0 010-.816l7.133-5.036a.5.5 0 01.788.41v10.07a.5.5 0 01-.788.408l-7.133-5.036z"></path>
    </svg>
  );
};

FastBackwardMini.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FastBackwardMini.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FastBackwardMini;
