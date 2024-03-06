import React from 'react';
import PropTypes from 'prop-types';

const HardDisk = props => {
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
      <path d="M17.75 19a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.324 1.5H3.707l-2.519 12H1V22h22v-8.5h-.186l-2.49-12zm.447 12l-2.075-10H5.331l-2.1 10h17.54zM3 15.5V20h18v-4.5H3z"
      ></path>
    </svg>
  );
};

HardDisk.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

HardDisk.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default HardDisk;
