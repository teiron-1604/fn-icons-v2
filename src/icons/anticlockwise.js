import React from 'react';
import PropTypes from 'prop-types';

const Anticlockwise = props => {
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
      <path d="M11 9h10a1 1 0 011 1v10a1 1 0 01-1 1H11a1 1 0 01-1-1V10a1 1 0 011-1zm1 2v8h8v-8h-8zm-6-.414l1.828-1.829 1.415 1.415L5 14.414.757 10.172l1.415-1.415L4 10.586V8a5 5 0 015-5h4v2H9a3 3 0 00-3 3v2.586z"></path>
    </svg>
  );
};

Anticlockwise.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Anticlockwise.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Anticlockwise;
