import React from 'react';
import PropTypes from 'prop-types';

const ComponentFill = props => {
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
      <path d="M12 2l4.444 4.444L12 10.89 7.556 6.444 12 2zM6.444 7.556L10.89 12l-4.445 4.444L2 12l4.444-4.444zm11.112 0L22 12l-4.444 4.444L13.11 12l4.445-4.444zM12 13.11l4.444 4.445L12 22l-4.444-4.444L12 13.11z"></path>
    </svg>
  );
};

ComponentFill.propTypes = {
  color: PropTypes.string
};

ComponentFill.defaultProps = {
  color: 'currentColor'
};

export default ComponentFill;
