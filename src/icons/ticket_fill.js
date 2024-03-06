import React from 'react';
import PropTypes from 'prop-types';

const TicketFill = props => {
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
      <path d="M21 3a1 1 0 011 1v5.5a2.5 2.5 0 000 5V20a1 1 0 01-1 1H3a1 1 0 01-1-1v-5.5a2.5 2.5 0 000-5V4a1 1 0 011-1h18z"></path>
    </svg>
  );
};

TicketFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TicketFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TicketFill;
