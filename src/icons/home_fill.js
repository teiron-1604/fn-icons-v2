import React from 'react';
import PropTypes from 'prop-types';

const HomeFill = props => {
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
      <path d="M21 20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.49a1 1 0 01.386-.79l8-6.222a1 1 0 011.228 0l8 6.222a1 1 0 01.386.79V20z"></path>
    </svg>
  );
};

HomeFill.propTypes = {
  color: PropTypes.string
};

HomeFill.defaultProps = {
  color: 'currentColor'
};

export default HomeFill;
