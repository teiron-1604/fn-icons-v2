import React from 'react';
import PropTypes from 'prop-types';

const WifiOn = props => {
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
      <path d="M.69 6.997A17.925 17.925 0 0112 3c4.285 0 8.22 1.497 11.31 3.997l-1.256 1.556A15.933 15.933 0 0012 5C8.19 5 4.694 6.33 1.946 8.553L.69 6.997zm3.14 3.89A12.946 12.946 0 0112 8a12.95 12.95 0 018.169 2.886l-1.257 1.556A10.954 10.954 0 0012 10c-2.618 0-5.023.915-6.912 2.442L3.83 10.886v.001zm3.143 3.89A7.967 7.967 0 0112 13c1.904 0 3.653.665 5.027 1.776l-1.257 1.556A5.975 5.975 0 0012 15c-1.428 0-2.74.499-3.77 1.332l-1.257-1.556v.001zm3.142 3.89A2.987 2.987 0 0112 18c.714 0 1.37.25 1.885.666L12 21l-1.885-2.334v.001z"></path>
    </svg>
  );
};

WifiOn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

WifiOn.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default WifiOn;
