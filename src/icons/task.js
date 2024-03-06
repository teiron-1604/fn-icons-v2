import React from 'react';
import PropTypes from 'prop-types';

const Task = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M21 2.992v18.016a1 1 0 01-.993.992H3.993A.993.993 0 013 21.008V2.992A1 1 0 013.993 2h16.014c.548 0 .993.444.993.992zM19 4H5v16h14V4zm-7.707 9.121l4.243-4.242 1.414 1.414-5.657 5.657-3.89-3.89 1.415-1.414 2.475 2.475z"></path>
    </svg>
  );
};

Task.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Task.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Task;
