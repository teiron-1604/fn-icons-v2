import React from 'react';
import PropTypes from 'prop-types';

const Discuss = props => {
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
      <path d="M14 22.5L11.2 19H6a1 1 0 01-1-1V7.103a1 1 0 011-1h16a1 1 0 011 1V18a1 1 0 01-1 1h-5.2L14 22.5zm1.839-5.5H21V8.103H7V17h5.161L14 19.298 15.839 17zM2 2h17v2H3v11H1V3a1 1 0 011-1z"></path>
    </svg>
  );
};

Discuss.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Discuss.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Discuss;
