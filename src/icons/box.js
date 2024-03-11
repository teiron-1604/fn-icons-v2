import React from 'react';
import PropTypes from 'prop-types';

const Box = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 6L12 1 2 6v12l10 5 10-5V6zM12 3.236L4.854 6.81 12 10.382l7.146-3.573L12 3.236zM4 16.764V8.618l7 3.5v8.146l-7-3.5zm9 3.5l7-3.5V8.618l-7 3.5v8.146z"
      ></path>
    </svg>
  );
};

Box.propTypes = {
  color: PropTypes.string
};

Box.defaultProps = {
  color: 'currentColor'
};

export default Box;
