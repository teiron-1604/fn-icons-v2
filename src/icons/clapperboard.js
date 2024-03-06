import React from 'react';
import PropTypes from 'prop-types';

const Clapperboard = props => {
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
      <path d="M5.998 7l2.31-4h3.69l-2.31 4h-3.69zm6 0l2.31-4h3.69l-2.31 4h-3.69zm6 0l2.31-4h.7c.548 0 .992.445.992.993v16.014a1 1 0 01-.992.993H2.992A.993.993 0 012 20.007V3.993A1 1 0 012.992 3h3.006L4 6.46V19h16V7h-2.002z"></path>
    </svg>
  );
};

Clapperboard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Clapperboard.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Clapperboard;
