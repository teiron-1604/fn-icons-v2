import React from 'react';
import PropTypes from 'prop-types';

const CheckCircle = props => {
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
      <path d="M12.5 22c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16.001A8 8 0 0012.5 20zm-.997-4L7.26 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.503 16z"></path>
    </svg>
  );
};

CheckCircle.propTypes = {
  color: PropTypes.string
};

CheckCircle.defaultProps = {
  color: 'currentColor'
};

export default CheckCircle;
