import React from 'react';
import PropTypes from 'prop-types';

const FileShred = props => {
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
      <path d="M6 12h12V8h-4V4H6v8zm-2 0V2.995c0-.55.445-.995.996-.995H15l5 5v5h2v2H2v-2h2zm-1 4h2v6H3v-6zm16 0h2v6h-2v-6zm-4 0h2v6h-2v-6zm-4 0h2v6h-2v-6zm-4 0h2v6H7v-6z"></path>
    </svg>
  );
};

FileShred.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FileShred.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FileShred;
