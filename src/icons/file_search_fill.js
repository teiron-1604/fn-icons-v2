import React from 'react';
import PropTypes from 'prop-types';

const FileSearchFill = props => {
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
      <path d="M16 2l5 5v14.008a.993.993 0 01-.993.992H3.993A1 1 0 013 21.008V2.992C3 2.444 3.445 2 3.993 2H16zm-2.471 12.446l2.21 2.21 1.415-1.413-2.21-2.21a4.002 4.002 0 00-6.276-4.861 4 4 0 004.861 6.274zm-.618-2.032a2 2 0 11-2.877-2.78 2 2 0 012.877 2.78z"></path>
    </svg>
  );
};

FileSearchFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FileSearchFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FileSearchFill;
