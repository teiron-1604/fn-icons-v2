import React from 'react';
import PropTypes from 'prop-types';

const AddCircle = props => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4a8 8 0 100 16 8 8 0 000-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm11-4.376V11h3.375v2H13v3.376h-2v-3.376H7.625v-2H11V7.624h2z"
        opacity=".9"
      ></path>
    </svg>
  );
};

AddCircle.propTypes = {
  color: PropTypes.string
};

AddCircle.defaultProps = {
  color: 'currentColor'
};

export default AddCircle;
