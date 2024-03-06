import React from 'react';
import PropTypes from 'prop-types';

const FontColor = props => {
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
      <path d="M15.246 14H8.754l-1.6 4H5l6-15h2l6 15h-2.154l-1.6-4zm-.8-2L12 5.885 9.554 12h4.892zM3 20h18v2H3v-2z"></path>
    </svg>
  );
};

FontColor.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FontColor.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FontColor;
