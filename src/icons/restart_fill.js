import React from 'react';
import PropTypes from 'prop-types';

const RestartFill = props => {
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
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm4.82-4.924a7 7 0 10-1.852 1.266l-.975-1.755A5 5 0 1117 12h-3l2.82 5.076z"></path>
    </svg>
  );
};

RestartFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RestartFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RestartFill;
