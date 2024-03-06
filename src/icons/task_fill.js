import React from 'react';
import PropTypes from 'prop-types';

const TaskFill = props => {
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
      <path d="M21 2.992v18.016a1 1 0 01-.993.992H3.993A.993.993 0 013 21.008V2.992A1 1 0 013.993 2h16.014c.548 0 .993.444.993.992zm-9.707 10.13l-2.475-2.476-1.414 1.415 3.889 3.889 5.657-5.657-1.414-1.414-4.243 4.242v.001z"></path>
    </svg>
  );
};

TaskFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TaskFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TaskFill;
