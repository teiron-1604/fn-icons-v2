import React from 'react';
import PropTypes from 'prop-types';

const DoubleQuotesL = props => {
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
      <path d="M4.583 17.321C3.553 16.227 3 15.001 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.31 1.804.166 3.226 1.647 3.226 3.488a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179zm10 0c-1.03-1.094-1.583-2.32-1.583-4.31 0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.31 1.804.166 3.226 1.647 3.226 3.488a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179z"></path>
    </svg>
  );
};

DoubleQuotesL.propTypes = {
  color: PropTypes.string
};

DoubleQuotesL.defaultProps = {
  color: 'currentColor'
};

export default DoubleQuotesL;
