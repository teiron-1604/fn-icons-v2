import React from 'react';
import PropTypes from 'prop-types';

const CaretRightFilled = props => {
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
      <path d="M12 13H4v-2h8V4l8 8-8 8v-7z"></path>
    </svg>
  );
};

CaretRightFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CaretRightFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CaretRightFilled;
