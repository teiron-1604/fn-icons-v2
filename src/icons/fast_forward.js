import React from 'react';
import PropTypes from 'prop-types';

const FastForward = props => {
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
      <path d="M12 13.333l-9.223 6.149A.5.5 0 012 19.066V4.934a.5.5 0 01.777-.416L12 10.667V4.934a.5.5 0 01.777-.416l10.599 7.066a.5.5 0 010 .832l-10.599 7.066a.5.5 0 01-.777-.416v-5.733zM10.394 12L4 7.737v8.526L10.394 12zM14 7.737v8.526L20.394 12 14 7.737z"></path>
    </svg>
  );
};

FastForward.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FastForward.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FastForward;
