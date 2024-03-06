import React from 'react';
import PropTypes from 'prop-types';

const RepeatOne = props => {
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
      <path d="M8 20v1.932a.5.5 0 01-.82.385l-4.12-3.433A.5.5 0 013.382 18H18a2 2 0 002-2V8h2v8a4 4 0 01-4 4H8zm8-16V2.068a.5.5 0 01.82-.385l4.12 3.433a.5.5 0 01-.321.884H6a2 2 0 00-2 2v8H2V8a4 4 0 014-4h10zm-5 4h2v8h-2v-6H9V9l2-1z"></path>
    </svg>
  );
};

RepeatOne.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RepeatOne.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RepeatOne;
