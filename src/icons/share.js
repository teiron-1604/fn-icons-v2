import React from 'react';
import PropTypes from 'prop-types';

const Share = props => {
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
      <path d="M13.12 17.023l-4.199-2.29a4 4 0 110-5.465l4.2-2.29a4 4 0 11.959 1.755l-4.2 2.29a4.009 4.009 0 010 1.954l4.199 2.29a4 4 0 11-.959 1.755zM6 14a2 2 0 100-4 2 2 0 000 4zm11-6a2 2 0 100-4 2 2 0 000 4zm0 12a2 2 0 100-4 2 2 0 000 4z"></path>
    </svg>
  );
};

Share.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Share.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Share;
