import React from 'react';
import PropTypes from 'prop-types';

const ArrowDownS = props => {
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
      <path d="M12 13.061l4.95-4.95 1.414 1.414L12 15.89 5.636 9.525 7.05 8.111l4.95 4.95z"></path>
    </svg>
  );
};

ArrowDownS.propTypes = {
  color: PropTypes.string
};

ArrowDownS.defaultProps = {
  color: 'currentColor'
};

export default ArrowDownS;
