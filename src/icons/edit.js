import React from 'react';
import PropTypes from 'prop-types';

const Edit = props => {
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
      <path d="M6.414 16L16.556 5.858l-1.414-1.414L5 14.586V16h1.414zm.829 2H3v-4.243L14.435 2.322a1 1 0 011.414 0l2.829 2.83a1 1 0 010 1.413L7.243 18zM3 20h18v2H3v-2z"></path>
    </svg>
  );
};

Edit.propTypes = {
  color: PropTypes.string
};

Edit.defaultProps = {
  color: 'currentColor'
};

export default Edit;
