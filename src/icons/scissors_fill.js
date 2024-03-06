import React from 'react';
import PropTypes from 'prop-types';

const ScissorsFill = props => {
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
      <path d="M12 14.12l-2.317 2.318a4 4 0 11-2.121-2.121L9.88 12 4.21 6.333a2 2 0 010-2.83l.708-.706L12 9.88l7.081-7.082.708.707a1.999 1.999 0 010 2.829L14.12 12l2.317 2.317a4 4 0 11-2.121 2.12L12 14.12zM6 20a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4z"></path>
    </svg>
  );
};

ScissorsFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ScissorsFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ScissorsFill;
