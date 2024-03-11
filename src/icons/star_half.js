import React from 'react';
import PropTypes from 'prop-types';

const StarHalf = props => {
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
      <path d="M12 15.968l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275v10.693zm0 2.292l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26z"></path>
    </svg>
  );
};

StarHalf.propTypes = {
  color: PropTypes.string
};

StarHalf.defaultProps = {
  color: 'currentColor'
};

export default StarHalf;
