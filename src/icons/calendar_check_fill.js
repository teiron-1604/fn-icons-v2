import React from 'react';
import PropTypes from 'prop-types';

const CalendarCheckFill = props => {
  const { color, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M9 1v2h6V1h2v2h4a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h4V1h2zm11 7H4v11h16V8zm-4.964 2.136l1.414 1.414-4.95 4.95-3.536-3.536L9.38 11.55l2.121 2.122 3.536-3.536h-.001z"></path>
    </svg>
  );
};

CalendarCheckFill.propTypes = {
  color: PropTypes.string
};

CalendarCheckFill.defaultProps = {
  color: 'currentColor'
};

export default CalendarCheckFill;
