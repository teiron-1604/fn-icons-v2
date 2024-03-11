import React from 'react';
import PropTypes from 'prop-types';

const EnglishInput = props => {
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
      <path d="M14 10h2v.757a4.5 4.5 0 017 3.743V20h-2v-5.5c0-1.43-1.175-2.5-2.5-2.5S16 13.07 16 14.5V20h-2V10zm-2-6v2H4v5h8v2H4v5h8v2H2V4h10z"></path>
    </svg>
  );
};

EnglishInput.propTypes = {
  color: PropTypes.string
};

EnglishInput.defaultProps = {
  color: 'currentColor'
};

export default EnglishInput;
