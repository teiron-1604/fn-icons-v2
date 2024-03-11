import React from 'react';
import PropTypes from 'prop-types';

const Send = props => {
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
      <path d="M3.741 1.408l18.462 10.154a.5.5 0 010 .876L3.741 22.592A.5.5 0 013 22.154V1.846a.5.5 0 01.741-.438zM5 13v6.617L18.85 12 5 4.383V11h5v2H5z"></path>
    </svg>
  );
};

Send.propTypes = {
  color: PropTypes.string
};

Send.defaultProps = {
  color: 'currentColor'
};

export default Send;
