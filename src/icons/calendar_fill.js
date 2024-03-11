import React from 'react';
import PropTypes from 'prop-types';

const CalendarFill = props => {
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
      <path d="M2 11h20v9a1 1 0 01-1 1H3a1 1 0 01-1-1v-9zm15-8h4a1 1 0 011 1v5H2V4a1 1 0 011-1h4V1h2v2h6V1h2v2z"></path>
    </svg>
  );
};

CalendarFill.propTypes = {
  color: PropTypes.string
};

CalendarFill.defaultProps = {
  color: 'currentColor'
};

export default CalendarFill;
