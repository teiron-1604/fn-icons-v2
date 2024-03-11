import React from 'react';
import PropTypes from 'prop-types';

const UDiskFill = props => {
  const { color, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M4 12h16a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1v-8a1 1 0 011-1zM5 2h14v8H5V2zm4 3v2h2V5H9zm4 0v2h2V5h-2z"></path>
    </svg>
  );
};

UDiskFill.propTypes = {
  color: PropTypes.string
};

UDiskFill.defaultProps = {
  color: 'currentColor'
};

export default UDiskFill;
