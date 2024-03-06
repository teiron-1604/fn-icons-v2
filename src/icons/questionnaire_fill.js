import React from 'react';
import PropTypes from 'prop-types';

const QuestionnaireFill = props => {
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
      <path d="M6.455 19L2 22.5V4a1 1 0 011-1h18a1 1 0 011 1v14a1 1 0 01-1 1H6.455zM11 14v2h2v-2h-2zM8.567 8.813l1.962.393A1.5 1.5 0 1112 11h-1v2h1a3.5 3.5 0 10-3.433-4.187z"></path>
    </svg>
  );
};

QuestionnaireFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

QuestionnaireFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default QuestionnaireFill;
