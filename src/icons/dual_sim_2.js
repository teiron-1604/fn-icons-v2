import React from 'react';
import PropTypes from 'prop-types';

const DualSim2 = props => {
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
      <path d="M15 2l4.707 4.707a1 1 0 01.293.707V21a1 1 0 01-1 1H5a1 1 0 01-1-1V3a1 1 0 011-1h10zm-.829 2H6v16h12V7.829L14.171 4zM12 7.5a3 3 0 012.009 5.228l-.008-.008.006.01L12.595 14H15v2H9v-1.453l3.67-3.304A1 1 0 1011 10.5H9a3 3 0 013-3z"></path>
    </svg>
  );
};

DualSim2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DualSim2.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DualSim2;
