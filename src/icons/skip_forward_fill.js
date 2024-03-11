import React from 'react';
import PropTypes from 'prop-types';

const SkipForwardFill = props => {
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
      <path d="M16 12.667L5.777 19.482A.5.5 0 015 19.066V4.934a.5.5 0 01.777-.416L16 11.333V5a1 1 0 012 0v14a1 1 0 01-2 0v-6.333z"></path>
    </svg>
  );
};

SkipForwardFill.propTypes = {
  color: PropTypes.string
};

SkipForwardFill.defaultProps = {
  color: 'currentColor'
};

export default SkipForwardFill;
