import React from 'react';
import PropTypes from 'prop-types';

const SplitCellsHorizontal = props => {
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
      <path d="M20 3a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h16zm-9 2H5v14h6v-4h2v4h6V5h-6v4h-2V5zm4 4l3 3-3 3v-2H9v2l-3-3 3-3v2h6V9z"></path>
    </svg>
  );
};

SplitCellsHorizontal.propTypes = {
  color: PropTypes.string
};

SplitCellsHorizontal.defaultProps = {
  color: 'currentColor'
};

export default SplitCellsHorizontal;
