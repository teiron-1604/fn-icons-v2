import React from 'react';
import PropTypes from 'prop-types';

const BarChart = props => {
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
      <path d="M2 13h6v8H2v-8zm14-5h6v13h-6V8zM9 3h6v18H9V3zM4 15v4h2v-4H4zm7-10v14h2V5h-2zm7 5v9h2v-9h-2z"></path>
    </svg>
  );
};

BarChart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BarChart.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BarChart;
