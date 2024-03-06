import React from 'react';
import PropTypes from 'prop-types';

const TrashFill = props => {
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
      <path d="M20 7v14a1 1 0 01-1 1H5a1 1 0 01-1-1V7H2V5h20v2h-2zm-9 3v7h2v-7h-2zM7 2h10v2H7V2z"></path>
    </svg>
  );
};

TrashFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TrashFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TrashFill;
