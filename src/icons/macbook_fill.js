import React from 'react';
import PropTypes from 'prop-types';

const MacbookFill = props => {
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
      <path d="M2 4.007C2 3.45 2.455 3 2.992 3h18.016c.548 0 .992.45.992 1.007V17H2V4.007zM1 19h22v2H1v-2z"></path>
    </svg>
  );
};

MacbookFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MacbookFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MacbookFill;
