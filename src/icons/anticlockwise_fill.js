import React from 'react';
import PropTypes from 'prop-types';

const AnticlockwiseFill = props => {
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
      <path d="M6 10h3l-4 5-4-5h3V8a5 5 0 015-5h4v2H9a3 3 0 00-3 3v2zm5-1h10a1 1 0 011 1v10a1 1 0 01-1 1H11a1 1 0 01-1-1V10a1 1 0 011-1z"></path>
    </svg>
  );
};

AnticlockwiseFill.propTypes = {
  color: PropTypes.string
};

AnticlockwiseFill.defaultProps = {
  color: 'currentColor'
};

export default AnticlockwiseFill;
