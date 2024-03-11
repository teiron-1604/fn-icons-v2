import React from 'react';
import PropTypes from 'prop-types';

const AddSquare = props => {
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
      <path d="M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm1 2v14h14V5H5zm6 6V7h2v4h4v2h-4v4h-2v-4H7v-2h4z"></path>
    </svg>
  );
};

AddSquare.propTypes = {
  color: PropTypes.string
};

AddSquare.defaultProps = {
  color: 'currentColor'
};

export default AddSquare;
