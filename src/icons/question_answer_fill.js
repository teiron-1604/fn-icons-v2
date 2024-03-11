import React from 'react';
import PropTypes from 'prop-types';

const QuestionAnswerFill = props => {
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
      <path d="M8 18h10.237L20 19.385V9h1a1 1 0 011 1v13.5L17.545 20H9a1 1 0 01-1-1v-1zm-2.545-2L1 19.5V4a1 1 0 011-1h15a1 1 0 011 1v12H5.455z"></path>
    </svg>
  );
};

QuestionAnswerFill.propTypes = {
  color: PropTypes.string
};

QuestionAnswerFill.defaultProps = {
  color: 'currentColor'
};

export default QuestionAnswerFill;
