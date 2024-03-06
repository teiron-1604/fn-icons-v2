import React from 'react';
import PropTypes from 'prop-types';

const LineHeight = props => {
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
      <path d="M11 4h10v2H11V4zM6 7v4H4V7H1l4-4 4 4H6zm0 10h3l-4 4-4-4h3v-4h2v4zm5 1h10v2H11v-2zm-2-7h12v2H9v-2z"></path>
    </svg>
  );
};

LineHeight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LineHeight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default LineHeight;
