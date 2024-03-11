import React from 'react';
import PropTypes from 'prop-types';

const Vidicon = props => {
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
      <path d="M17 9.2l5.213-3.65a.5.5 0 01.787.41v12.08a.5.5 0 01-.787.41L17 14.8V19a1 1 0 01-1 1H2a1 1 0 01-1-1V5a1 1 0 011-1h14a1 1 0 011 1v4.2zm0 3.159l4 2.8V8.84l-4 2.8v.719zM3 6v12h12V6H3zm2 2h2v2H5V8z"></path>
    </svg>
  );
};

Vidicon.propTypes = {
  color: PropTypes.string
};

Vidicon.defaultProps = {
  color: 'currentColor'
};

export default Vidicon;
