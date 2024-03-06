import React from 'react';
import PropTypes from 'prop-types';

const Rss = props => {
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
      <path d="M3 17a4 4 0 014 4H3v-4zm0-7c6.075 0 11 4.925 11 11h-2a9 9 0 00-9-9v-2zm0-7c9.941 0 18 8.059 18 18h-2c0-8.837-7.163-16-16-16V3z"></path>
    </svg>
  );
};

Rss.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Rss.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Rss;
