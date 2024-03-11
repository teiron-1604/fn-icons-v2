import React from 'react';
import PropTypes from 'prop-types';

const RssFill = props => {
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
      <path d="M3 3c9.941 0 18 8.059 18 18h-3c0-8.284-6.716-15-15-15V3zm0 7c6.075 0 11 4.925 11 11h-3a8 8 0 00-8-8v-3zm0 7a4 4 0 014 4H3v-4z"></path>
    </svg>
  );
};

RssFill.propTypes = {
  color: PropTypes.string
};

RssFill.defaultProps = {
  color: 'currentColor'
};

export default RssFill;
