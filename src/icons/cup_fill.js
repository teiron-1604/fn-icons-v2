import React from 'react';
import PropTypes from 'prop-types';

const CupFill = props => {
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
      <path d="M5 3h15a2 2 0 012 2v3a2 2 0 01-2 2h-2v3a4 4 0 01-4 4H8a4 4 0 01-4-4V4a1 1 0 011-1zm13 2v3h2V5h-2zM2 19h18v2H2v-2z"></path>
    </svg>
  );
};

CupFill.propTypes = {
  color: PropTypes.string
};

CupFill.defaultProps = {
  color: 'currentColor'
};

export default CupFill;
