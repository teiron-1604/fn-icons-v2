import React from 'react';
import PropTypes from 'prop-types';

const Survey = props => {
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
      <path d="M17 2v2h3.007c.548 0 .993.445.993.993v16.014a.994.994 0 01-.993.993H3.993A.994.994 0 013 21.007V4.993C3 4.445 3.445 4 3.993 4H7V2h10zM7 6H5v14h14V6h-2v2H7V6zm2 10v2H7v-2h2zm0-3v2H7v-2h2zm0-3v2H7v-2h2zm6-6H9v2h6V4z"></path>
    </svg>
  );
};

Survey.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Survey.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Survey;
