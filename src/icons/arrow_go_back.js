import React from 'react';
import PropTypes from 'prop-types';

const ArrowGoBack = props => {
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
      <path d="M5.828 7l2.536 2.536L6.95 10.95 2 6l4.95-4.95 1.414 1.414L5.828 5H13a8 8 0 010 16H4v-2h9a6 6 0 100-12H5.828z"></path>
    </svg>
  );
};

ArrowGoBack.propTypes = {
  color: PropTypes.string
};

ArrowGoBack.defaultProps = {
  color: 'currentColor'
};

export default ArrowGoBack;
