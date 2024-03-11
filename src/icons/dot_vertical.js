import React from 'react';
import PropTypes from 'prop-types';

const DotVertical = props => {
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
      <path d="M10.5 19.5c0 .825.675 1.5 1.5 1.5s1.5-.675 1.5-1.5S12.825 18 12 18s-1.5.675-1.5 1.5zm0-15c0 .825.675 1.5 1.5 1.5s1.5-.675 1.5-1.5S12.825 3 12 3s-1.5.675-1.5 1.5zm0 7.5c0 .825.675 1.5 1.5 1.5s1.5-.675 1.5-1.5-.675-1.5-1.5-1.5-1.5.675-1.5 1.5z"></path>
    </svg>
  );
};

DotVertical.propTypes = {
  color: PropTypes.string
};

DotVertical.defaultProps = {
  color: 'currentColor'
};

export default DotVertical;
