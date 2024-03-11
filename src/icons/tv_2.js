import React from 'react';
import PropTypes from 'prop-types';

const Tv2 = props => {
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
      <path d="M2 4c0-.552.455-1 .992-1h18.016c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.996.996 0 012 18V4zm2 1v12h16V5H4zm1 15h14v2H5v-2z"></path>
    </svg>
  );
};

Tv2.propTypes = {
  color: PropTypes.string
};

Tv2.defaultProps = {
  color: 'currentColor'
};

export default Tv2;
