import React from 'react';
import PropTypes from 'prop-types';

const FastForwardFill = props => {
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
      <path d="M12 13.333l-9.223 6.149A.5.5 0 012 19.066V4.934a.5.5 0 01.777-.416L12 10.667V4.934a.5.5 0 01.777-.416l10.599 7.066a.5.5 0 010 .832l-10.599 7.066a.5.5 0 01-.777-.416v-5.733z"></path>
    </svg>
  );
};

FastForwardFill.propTypes = {
  color: PropTypes.string
};

FastForwardFill.defaultProps = {
  color: 'currentColor'
};

export default FastForwardFill;
