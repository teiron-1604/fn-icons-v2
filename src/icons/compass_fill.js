import React from 'react';
import PropTypes from 'prop-types';

const CompassFill = props => {
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
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm4.5-14.5L10 10l-2.5 6.5L14 14l2.5-6.5zM12 13a1 1 0 110-2 1 1 0 010 2z"></path>
    </svg>
  );
};

CompassFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CompassFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CompassFill;
