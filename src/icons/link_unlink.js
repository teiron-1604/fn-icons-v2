import React from 'react';
import PropTypes from 'prop-types';

const LinkUnlink = props => {
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
      <path d="M17 17h5v2h-3v3h-2v-5zM7 7H2V5h3V2h2v5zm11.364 8.536L16.95 14.12l1.414-1.414a5.001 5.001 0 00-3.531-8.551 5 5 0 00-3.54 1.48L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 119.9 9.9l-1.415 1.414h-.001zm-2.828 2.828l-1.415 1.414a7 7 0 11-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 107.071 7.071l1.414-1.414 1.415 1.414v-.001zm-.708-10.607l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07v-.001z"></path>
    </svg>
  );
};

LinkUnlink.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LinkUnlink.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default LinkUnlink;
