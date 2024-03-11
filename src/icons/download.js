import React from 'react';
import PropTypes from 'prop-types';

const Download = props => {
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
      <path d="M3 19h18v2H3v-2zm10-5.828L19.071 7.1l1.414 1.414L12 17 3.515 8.515 4.929 7.1 11 13.17V2h2v11.172z"></path>
    </svg>
  );
};

Download.propTypes = {
  color: PropTypes.string
};

Download.defaultProps = {
  color: 'currentColor'
};

export default Download;
