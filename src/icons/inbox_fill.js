import React from 'react';
import PropTypes from 'prop-types';

const InboxFill = props => {
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
      <path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm6 9a3 3 0 006 0h5V5H4v7h5z"></path>
    </svg>
  );
};

InboxFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

InboxFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default InboxFill;
