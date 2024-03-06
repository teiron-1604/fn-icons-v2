import React from 'react';
import PropTypes from 'prop-types';

const Tv = props => {
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
      <path d="M15.414 5h5.594c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.996.996 0 012 20V6c0-.552.455-1 .992-1h5.594L6.05 2.464 7.464 1.05 11.414 5h1.172l3.95-3.95 1.414 1.414L15.414 5zM4 7v12h16V7H4z"></path>
    </svg>
  );
};

Tv.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Tv.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Tv;
