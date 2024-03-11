import React from 'react';
import PropTypes from 'prop-types';

const FontSize = props => {
  const { color, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M11.246 15H4.754l-2 5H.6L7 4h2l6.4 16h-2.154l-2-5zm-.8-2L8 6.885 5.554 13h4.892zM21 12.535V12h2v8h-2v-.535a4 4 0 110-6.93zM19 18a2 2 0 100-4 2 2 0 000 4z"></path>
    </svg>
  );
};

FontSize.propTypes = {
  color: PropTypes.string
};

FontSize.defaultProps = {
  color: 'currentColor'
};

export default FontSize;
