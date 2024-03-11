import React from 'react';
import PropTypes from 'prop-types';

const CameraLensFill = props => {
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
      <path d="M9.827 21.763L14.31 14l3.532 6.117A9.955 9.955 0 0112 22c-.746 0-1.473-.082-2.173-.237zM7.89 21.12A10.029 10.029 0 012.458 15h8.965L7.89 21.119v.001zM2.05 13a9.964 9.964 0 012.583-7.761L9.112 13H2.05zm4.109-9.117A9.955 9.955 0 0112 2c.746 0 1.473.082 2.173.237L9.69 10 6.159 3.883zM16.11 2.88A10.028 10.028 0 0121.542 9h-8.965l3.533-6.119V2.88zM21.95 11a9.965 9.965 0 01-2.583 7.761L14.888 11h7.064-.002z"></path>
    </svg>
  );
};

CameraLensFill.propTypes = {
  color: PropTypes.string
};

CameraLensFill.defaultProps = {
  color: 'currentColor'
};

export default CameraLensFill;
