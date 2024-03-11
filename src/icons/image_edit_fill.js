import React from 'react';
import PropTypes from 'prop-types';

const ImageEditFill = props => {
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
      <g clipPath="url(#clip0_18_15231)">
        <path d="M20 3a1 1 0 011 1v1.757l-2 2V5H5v8.1l4-4 4.328 4.329-1.327 1.327-.006 4.239 4.246.006 1.33-1.33L18.899 19H19v-2.758l2-2V20a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h16zm1.778 4.808l1.414 1.414L15.414 17l-1.416-.002.002-1.412 7.778-7.778zM15.5 7a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0115.5 7z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15231">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ImageEditFill.propTypes = {
  color: PropTypes.string
};

ImageEditFill.defaultProps = {
  color: 'currentColor'
};

export default ImageEditFill;
