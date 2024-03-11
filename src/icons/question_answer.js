import React from 'react';
import PropTypes from 'prop-types';

const QuestionAnswer = props => {
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
      <path d="M5.455 15L1 18.5V3a1 1 0 011-1h15a1 1 0 011 1v12H5.455zm-.692-2H16V4H3v10.385L4.763 13zM8 17h10.237L20 18.385V8h1a1 1 0 011 1v13.5L17.545 19H9a1 1 0 01-1-1v-1z"></path>
    </svg>
  );
};

QuestionAnswer.propTypes = {
  color: PropTypes.string
};

QuestionAnswer.defaultProps = {
  color: 'currentColor'
};

export default QuestionAnswer;
