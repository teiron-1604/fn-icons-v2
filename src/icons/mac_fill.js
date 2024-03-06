import React from 'react';
import PropTypes from 'prop-types';

const MacFill = props => {
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
      <path d="M14 18v2l2 1v1H8l-.004-.996L10 20v-2H2.992A1 1 0 012 16.993V4.007C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007v12.986c0 .556-.455 1.007-.992 1.007H14zM4 14v2h16v-2H4z"></path>
    </svg>
  );
};

MacFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MacFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MacFill;
