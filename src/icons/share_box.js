import React from 'react';
import PropTypes from 'prop-types';

const ShareBox = props => {
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
      <path d="M10 3v2H5v14h14v-5h2v6a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h6zm7.586 2H13V3h8v8h-2V6.414l-7 7L10.586 12l7-7z"></path>
    </svg>
  );
};

ShareBox.propTypes = {
  color: PropTypes.string
};

ShareBox.defaultProps = {
  color: 'currentColor'
};

export default ShareBox;
