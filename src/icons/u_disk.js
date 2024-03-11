import React from 'react';
import PropTypes from 'prop-types';

const UDisk = props => {
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
      <path d="M19 12H5v8h14v-8zM5 10V2h14v8h1a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V11a1 1 0 011-1h1zm2 0h10V4H7v6zm2-4h2v2H9V6zm4 0h2v2h-2V6z"></path>
    </svg>
  );
};

UDisk.propTypes = {
  color: PropTypes.string
};

UDisk.defaultProps = {
  color: 'currentColor'
};

export default UDisk;
