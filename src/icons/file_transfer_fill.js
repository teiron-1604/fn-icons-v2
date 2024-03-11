import React from 'react';
import PropTypes from 'prop-types';

const FileTransferFill = props => {
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
      <path d="M16 2l5 5v14.008a.993.993 0 01-.993.992H3.993A1 1 0 013 21.008V2.992C3 2.444 3.445 2 3.993 2H16zm-4 9H8v2h4v3l4-4-4-4v3z"></path>
    </svg>
  );
};

FileTransferFill.propTypes = {
  color: PropTypes.string
};

FileTransferFill.defaultProps = {
  color: 'currentColor'
};

export default FileTransferFill;
