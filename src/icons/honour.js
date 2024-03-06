import React from 'react';
import PropTypes from 'prop-types';

const Honour = props => {
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
      <path d="M21 4v14.721a.5.5 0 01-.298.458L12 23.03l-8.702-3.85A.5.5 0 013 18.72V4H1V2h22v2h-2zM5 4v13.745l7 3.1 7-3.1V4H5zm3 4h8v2H8V8zm0 4h8v2H8v-2z"></path>
    </svg>
  );
};

Honour.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Honour.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Honour;
