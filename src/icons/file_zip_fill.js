import React from 'react';
import PropTypes from 'prop-types';

const FileZipFill = props => {
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
      <path d="M10 2v2h2V2h8.007c.548 0 .993.444.993.992v18.016a1 1 0 01-.993.992H3.993A.993.993 0 013 21.008V2.992A1 1 0 013.993 2H10zm2 2v2h2V4h-2zm-2 2v2h2V6h-2zm2 2v2h2V8h-2zm-2 2v2h2v-2h-2zm2 2v2h-2v3h4v-5h-2z"></path>
    </svg>
  );
};

FileZipFill.propTypes = {
  color: PropTypes.string
};

FileZipFill.defaultProps = {
  color: 'currentColor'
};

export default FileZipFill;
