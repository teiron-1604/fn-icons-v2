import React from 'react';
import PropTypes from 'prop-types';

const PlayMiniFill = props => {
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
      <path d="M6 17.01V6.99c0-1.278 1.424-2.04 2.488-1.332l7.515 5.01a1.6 1.6 0 010 2.663l-7.515 5.01C7.424 19.052 6 18.289 6 17.012z"></path>
    </svg>
  );
};

PlayMiniFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PlayMiniFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PlayMiniFill;
