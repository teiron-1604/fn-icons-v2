import React from 'react';
import PropTypes from 'prop-types';

const RoadMap = props => {
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
      <path d="M4 6.143v12.824l5.065-2.17 6 3L20 17.68V4.857l1.303-.558a.5.5 0 01.697.46v14.24l-7 3-6-3-6.303 2.702A.5.5 0 012 21.24V7l2-.857zm12.243 5.1L12 15.485l-4.243-4.242a6 6 0 118.486 0zM12 12.657l2.828-2.83a4 4 0 10-5.656 0L12 12.658z"></path>
    </svg>
  );
};

RoadMap.propTypes = {
  color: PropTypes.string
};

RoadMap.defaultProps = {
  color: 'currentColor'
};

export default RoadMap;
