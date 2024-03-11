import React from 'react';
import PropTypes from 'prop-types';

const PauseCircleFill = props => {
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
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM9 9v6h2V9H9zm4 0v6h2V9h-2z"></path>
    </svg>
  );
};

PauseCircleFill.propTypes = {
  color: PropTypes.string
};

PauseCircleFill.defaultProps = {
  color: 'currentColor'
};

export default PauseCircleFill;
