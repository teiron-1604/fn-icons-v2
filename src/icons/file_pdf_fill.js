import React from 'react';
import PropTypes from 'prop-types';

const FilePdfFill = props => {
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
      <path d="M16 2l5 5v14.008a.993.993 0 01-.993.992H3.993A1 1 0 013 21.008V2.992C3 2.444 3.445 2 3.993 2H16zm-4 14a4 4 0 100-8H8v8h4zm-2-6h2a2 2 0 010 4h-2v-4z"></path>
    </svg>
  );
};

FilePdfFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FilePdfFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FilePdfFill;
