import React from 'react';
import PropTypes from 'prop-types';

const FileForbid = props => {
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
      <path d="M11.29 20a6.96 6.96 0 00.965 2H3.993A1 1 0 013 21.008V2.992C3 2.444 3.447 2 3.999 2H16l5 5v4.674a6.951 6.951 0 00-2-.603V8h-4V4H5v16h6.29zM18 23a5 5 0 110-10 5 5 0 010 10zm-1.293-2.292a3 3 0 004.001-4.001l-4.001 4v.001zm-1.415-1.415l4.001-4a3 3 0 00-4.001 4.001v-.001z"></path>
    </svg>
  );
};

FileForbid.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FileForbid.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FileForbid;
