import React from 'react';
import PropTypes from 'prop-types';

const History = props => {
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2a8 8 0 101.865-5.135L8 9H2V3l2.447 2.446A9.98 9.98 0 0112 2zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z"></path>
    </svg>
  );
};

History.propTypes = {
  color: PropTypes.string
};

History.defaultProps = {
  color: 'currentColor'
};

export default History;
