import React from 'react';
import PropTypes from 'prop-types';

const Cloud = props => {
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
      <path d="M17 21H7A6 6 0 015.008 9.339a7 7 0 1113.984 0A6 6 0 0117 21zm0-12a5.001 5.001 0 10-9.994.243l.07 1.488-1.404.494A4.002 4.002 0 007 19h10a4 4 0 10-3.796-5.265l-1.898-.633A6.002 6.002 0 0117 9z"></path>
    </svg>
  );
};

Cloud.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Cloud.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Cloud;
