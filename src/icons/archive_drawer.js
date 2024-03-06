import React from 'react';
import PropTypes from 'prop-types';

const ArchiveDrawer = props => {
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
      <path d="M3 2.992C3 2.444 3.445 2 3.993 2h16.014a1 1 0 01.993.992v18.016a.993.993 0 01-.993.992H3.993A1 1 0 013 21.008V2.992zM19 11V4H5v7h14zm0 2H5v7h14v-7zM9 6h6v2H9V6zm0 9h6v2H9v-2z"></path>
    </svg>
  );
};

ArchiveDrawer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArchiveDrawer.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArchiveDrawer;
