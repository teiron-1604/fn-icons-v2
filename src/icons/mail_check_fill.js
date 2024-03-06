import React from 'react';
import PropTypes from 'prop-types';

const MailCheckFill = props => {
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
      <path d="M22 13.341A6 6 0 0014.341 21H3a1 1 0 01-1-1V4a1 1 0 011-1h18a1 1 0 011 1v9.341zm-9.94-1.658L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439h-.001zM19 22l-3.536-3.536 1.415-1.414L19 19.172l3.536-3.536 1.414 1.414L19 22z"></path>
    </svg>
  );
};

MailCheckFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MailCheckFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MailCheckFill;
