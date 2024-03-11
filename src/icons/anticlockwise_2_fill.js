import React from 'react';
import PropTypes from 'prop-types';

const Anticlockwise2Fill = props => {
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
      <path d="M14 4h2a5 5 0 015 5v4h-2V9a3 3 0 00-3-3h-2v3L9 5l5-4v3zm1 7v10a1 1 0 01-1 1H4a1 1 0 01-1-1V11a1 1 0 011-1h10a1 1 0 011 1z"></path>
    </svg>
  );
};

Anticlockwise2Fill.propTypes = {
  color: PropTypes.string
};

Anticlockwise2Fill.defaultProps = {
  color: 'currentColor'
};

export default Anticlockwise2Fill;
