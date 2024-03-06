import React from 'react';
import PropTypes from 'prop-types';

const LiveFill = props => {
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
      <path d="M16 4a1 1 0 011 1v4.2l5.213-3.65a.5.5 0 01.787.41v12.08a.5.5 0 01-.787.41L17 14.8V19a1 1 0 01-1 1H2a1 1 0 01-1-1V5a1 1 0 011-1h14zM7.4 8.829a.4.4 0 00-.392.32L7 9.228v5.542a.4.4 0 00.542.374l.073-.036 4.355-2.772a.4.4 0 00.063-.624l-.063-.05L7.615 8.89a.4.4 0 00-.215-.06v-.001z"></path>
    </svg>
  );
};

LiveFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LiveFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default LiveFill;
