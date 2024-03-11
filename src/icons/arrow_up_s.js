import React from 'react';
import PropTypes from 'prop-types';

const ArrowUpS = props => {
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
      <path d="M12 10.939l-4.95 4.95-1.414-1.414L12 8.111l6.364 6.364-1.414 1.414-4.95-4.95z"></path>
    </svg>
  );
};

ArrowUpS.propTypes = {
  color: PropTypes.string
};

ArrowUpS.defaultProps = {
  color: 'currentColor'
};

export default ArrowUpS;
