import React from 'react';
import PropTypes from 'prop-types';

const Mirror = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 2v20l7-4V6L2 2zm2 3.446v13.108l3-1.715V7.161L4 5.446zm13 1.715v9.678l3 1.715V5.446l-3 1.715zM15 6v12l7 4V2l-7 4zm-2 16V2h-2v20h2z"
      ></path>
    </svg>
  );
};

Mirror.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Mirror.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Mirror;
