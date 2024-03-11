import React from 'react';
import PropTypes from 'prop-types';

const CopyrightFill = props => {
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
      <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 5c-2.76 0-5 2.24-5 5a5.002 5.002 0 009.288 2.572l-1.715-1.028a3 3 0 11.001-3.087l1.714-1.03A4.999 4.999 0 0012 7z"></path>
    </svg>
  );
};

CopyrightFill.propTypes = {
  color: PropTypes.string
};

CopyrightFill.defaultProps = {
  color: 'currentColor'
};

export default CopyrightFill;
