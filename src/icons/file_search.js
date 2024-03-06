import React from 'react';
import PropTypes from 'prop-types';

const FileSearch = props => {
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
      <path d="M15 4H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0120.007 22H3.993A1 1 0 013 21.008V2.992zm10.529 11.454a4.002 4.002 0 01-4.86-6.274 4 4 0 016.274 4.86l2.21 2.21-1.414 1.415-2.21-2.21v-.001zm-.618-2.032a2 2 0 10-2.78-2.877 2 2 0 002.78 2.877z"></path>
    </svg>
  );
};

FileSearch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FileSearch.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FileSearch;
