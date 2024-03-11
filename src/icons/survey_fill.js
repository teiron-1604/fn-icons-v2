import React from 'react';
import PropTypes from 'prop-types';

const SurveyFill = props => {
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
      <path d="M6 4v4h12V4h2.007c.548 0 .993.445.993.993v16.014a.994.994 0 01-.993.993H3.993A.994.994 0 013 21.007V4.993C3 4.445 3.445 4 3.993 4H6zm3 13H7v2h2v-2zm0-3H7v2h2v-2zm0-3H7v2h2v-2zm7-9v4H8V2h8z"></path>
    </svg>
  );
};

SurveyFill.propTypes = {
  color: PropTypes.string
};

SurveyFill.defaultProps = {
  color: 'currentColor'
};

export default SurveyFill;
