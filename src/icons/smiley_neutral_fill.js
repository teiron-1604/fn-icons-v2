import React from 'react';
import PropTypes from 'prop-types';

const SmileyNeutralFill = props => {
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
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-5-9a5 5 0 1010 0h-2a3 3 0 01-6 0H7zm1-2a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm8 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
    </svg>
  );
};

SmileyNeutralFill.propTypes = {
  color: PropTypes.string
};

SmileyNeutralFill.defaultProps = {
  color: 'currentColor'
};

export default SmileyNeutralFill;
