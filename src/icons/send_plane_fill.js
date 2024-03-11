import React from 'react';
import PropTypes from 'prop-types';

const SendPlaneFill = props => {
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
      <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.68.045L12 14l6-8-8 6-8.054-2.685z"></path>
    </svg>
  );
};

SendPlaneFill.propTypes = {
  color: PropTypes.string
};

SendPlaneFill.defaultProps = {
  color: 'currentColor'
};

export default SendPlaneFill;
