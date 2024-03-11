import React from 'react';
import PropTypes from 'prop-types';

const ChevronRight = props => {
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
      <path d="M12.172 12L9.343 9.172l1.414-1.415L15 12l-4.243 4.243-1.414-1.415L12.172 12z"></path>
    </svg>
  );
};

ChevronRight.propTypes = {
  color: PropTypes.string
};

ChevronRight.defaultProps = {
  color: 'currentColor'
};

export default ChevronRight;
