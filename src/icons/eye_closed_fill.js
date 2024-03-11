import React from 'react';
import PropTypes from 'prop-types';

const EyeClosedFill = props => {
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
      <path d="M10.13 15.842l-.788 2.94-1.931-.518.787-2.94a10.988 10.988 0 01-3.237-1.871l-2.153 2.154-1.415-1.415 2.154-2.153a10.957 10.957 0 01-2.371-5.07l.9-.165A16.923 16.923 0 0012 10c3.704 0 7.131-1.185 9.924-3.196l.9.164a10.957 10.957 0 01-2.37 5.07l2.153 2.154-1.415 1.415-2.153-2.154a10.987 10.987 0 01-3.237 1.872l.787 2.94-1.931.517-.788-2.94a11.07 11.07 0 01-3.74 0z"></path>
    </svg>
  );
};

EyeClosedFill.propTypes = {
  color: PropTypes.string
};

EyeClosedFill.defaultProps = {
  color: 'currentColor'
};

export default EyeClosedFill;
