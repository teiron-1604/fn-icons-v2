import React from 'react';
import PropTypes from 'prop-types';

const FileDownloadFill = props => {
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
      <g clipPath="url(#clip0_18_12937)">
        <path d="M16 2l5 5v14.008a.993.993 0 01-.993.992H3.993A1 1 0 013 21.008V2.992C3 2.444 3.445 2 3.993 2H16zm-3 10V8h-2v4H8l4 4 4-4h-3z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_12937">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FileDownloadFill.propTypes = {
  color: PropTypes.string
};

FileDownloadFill.defaultProps = {
  color: 'currentColor'
};

export default FileDownloadFill;
