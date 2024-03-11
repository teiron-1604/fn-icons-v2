import React from 'react';
import PropTypes from 'prop-types';

const NoteFill = props => {
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
      <path d="M20 3v14a4 4 0 11-2-3.465V6H9v11a4 4 0 11-2-3.465V3h13z"></path>
    </svg>
  );
};

NoteFill.propTypes = {
  color: PropTypes.string
};

NoteFill.defaultProps = {
  color: 'currentColor'
};

export default NoteFill;
