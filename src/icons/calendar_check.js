import React from 'react';
import PropTypes from 'prop-types';

const CalendarCheck = props => {
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
      <path d="M9 1v2h6V1h2v2h4a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h4V1h2zm11 9H4v9h16v-9zm-4.964 1.136l1.414 1.414-4.95 4.95-3.536-3.536L9.38 12.55l2.121 2.122 3.536-3.536h-.001zM7 5H4v3h16V5h-3v1h-2V5H9v1H7V5z"></path>
    </svg>
  );
};

CalendarCheck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CalendarCheck.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CalendarCheck;
