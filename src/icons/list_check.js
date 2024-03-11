import React from 'react';
import PropTypes from 'prop-types';

const ListCheck = props => {
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
      <path d="M8 4h13v2H8V4zm-5-.5h3v3H3v-3zm0 7h3v3H3v-3zm0 7h3v3H3v-3zM8 11h13v2H8v-2zm0 7h13v2H8v-2z"></path>
    </svg>
  );
};

ListCheck.propTypes = {
  color: PropTypes.string
};

ListCheck.defaultProps = {
  color: 'currentColor'
};

export default ListCheck;
