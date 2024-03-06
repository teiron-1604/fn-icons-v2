import React from 'react';
import PropTypes from 'prop-types';

const Note = props => {
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
      <path d="M20 3v14a4 4 0 11-2-3.465V5H9v12a4 4 0 11-2-3.465V3h13zM5 19a2 2 0 100-4 2 2 0 000 4zm11 0a2 2 0 100-4 2 2 0 000 4z"></path>
    </svg>
  );
};

Note.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Note.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Note;
