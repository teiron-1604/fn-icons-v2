import React from 'react';
import PropTypes from 'prop-types';

const AddCircleFill = props => {
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
      <path
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11H7v2h4v4h2v-4h4v-2h-4V7h-2v4z"
        opacity=".9"
      ></path>
    </svg>
  );
};

AddCircleFill.propTypes = {
  color: PropTypes.string
};

AddCircleFill.defaultProps = {
  color: 'currentColor'
};

export default AddCircleFill;
