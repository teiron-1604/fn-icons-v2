import React from 'react';
import PropTypes from 'prop-types';

const FileExcelFill = props => {
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
      <path d="M2.859 2.877l12.57-1.795a.5.5 0 01.571.495v20.846a.5.5 0 01-.57.495L2.858 21.123a1 1 0 01-.859-.99V3.867a1 1 0 01.859-.99h.001zM17 3h4a1 1 0 011 1v16a1 1 0 01-1 1h-4V3zm-6.8 9L13 8h-2.4L9 10.286 7.4 8H5l2.8 4L5 16h2.4L9 13.714 10.6 16H13l-2.8-4z"></path>
    </svg>
  );
};

FileExcelFill.propTypes = {
  color: PropTypes.string
};

FileExcelFill.defaultProps = {
  color: 'currentColor'
};

export default FileExcelFill;
