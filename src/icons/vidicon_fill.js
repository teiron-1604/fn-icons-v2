import React from 'react';
import PropTypes from 'prop-types';

const VidiconFill = props => {
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
      <path d="M17 9.2l5.213-3.65a.5.5 0 01.787.41v12.08a.5.5 0 01-.787.41L17 14.8V19a1 1 0 01-1 1H2a1 1 0 01-1-1V5a1 1 0 011-1h14a1 1 0 011 1v4.2zM5 8v2h2V8H5z"></path>
    </svg>
  );
};

VidiconFill.propTypes = {
  color: PropTypes.string
};

VidiconFill.defaultProps = {
  color: 'currentColor'
};

export default VidiconFill;
