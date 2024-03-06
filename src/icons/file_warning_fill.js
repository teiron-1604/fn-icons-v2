import React from 'react';
import PropTypes from 'prop-types';

const FileWarningFill = props => {
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
      <path d="M16 2l5 5v14.008a.993.993 0 01-.993.992H3.993A1 1 0 013 21.008V2.992C3 2.444 3.445 2 3.993 2H16zm-5 13v2h2v-2h-2zm0-8v6h2V7h-2z"></path>
    </svg>
  );
};

FileWarningFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FileWarningFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FileWarningFill;
