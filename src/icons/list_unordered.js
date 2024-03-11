import React from 'react';
import PropTypes from 'prop-types';

const ListUnordered = props => {
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
      <path d="M8 4h13v2H8V4zM4.5 6.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0 7a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0 6.9a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM8 11h13v2H8v-2zm0 7h13v2H8v-2z"></path>
    </svg>
  );
};

ListUnordered.propTypes = {
  color: PropTypes.string
};

ListUnordered.defaultProps = {
  color: 'currentColor'
};

export default ListUnordered;
