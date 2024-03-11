import React from 'react';
import PropTypes from 'prop-types';

const CopperDiamondFill = props => {
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
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM9.5 9L7 11.5l5 5 5-5L14.5 9h-5z"></path>
    </svg>
  );
};

CopperDiamondFill.propTypes = {
  color: PropTypes.string
};

CopperDiamondFill.defaultProps = {
  color: 'currentColor'
};

export default CopperDiamondFill;
