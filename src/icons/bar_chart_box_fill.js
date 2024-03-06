import React from 'react';
import PropTypes from 'prop-types';

const BarChartBoxFill = props => {
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
      <path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm4 10v4h2v-4H7zm4-6v10h2V7h-2zm4 3v7h2v-7h-2z"></path>
    </svg>
  );
};

BarChartBoxFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BarChartBoxFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BarChartBoxFill;
