import React from 'react';
import PropTypes from 'prop-types';

const FastForwardMiniFill = props => {
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
      <path d="M4.788 17.444A.5.5 0 014 17.035V6.965a.5.5 0 01.788-.409l7.133 5.036a.5.5 0 010 .816l-7.133 5.036zM13 6.965a.5.5 0 01.788-.409l7.133 5.036a.5.5 0 010 .816l-7.133 5.036a.5.5 0 01-.788-.409V6.965z"></path>
    </svg>
  );
};

FastForwardMiniFill.propTypes = {
  color: PropTypes.string
};

FastForwardMiniFill.defaultProps = {
  color: 'currentColor'
};

export default FastForwardMiniFill;
