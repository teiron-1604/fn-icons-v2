import React from 'react';
import PropTypes from 'prop-types';

const Component = props => {
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
      <path d="M12 2l4.444 4.444L12 10.89 7.556 6.444 12 2zM6.444 7.556L10.89 12l-4.445 4.444L2 12l4.444-4.444zm11.112 0L22 12l-4.444 4.444L13.11 12l4.445-4.444zM12 13.11l4.444 4.445L12 22l-4.444-4.444L12 13.11zm5.556-3.333L15.333 12l2.223 2.222L19.778 12l-2.222-2.222zM12 15.333l-2.222 2.223L12 19.778l2.222-2.222L12 15.333zm0-11.11L9.778 6.443 12 8.667l2.222-2.223L12 4.222zM6.444 9.777L4.222 12l2.222 2.222L8.667 12 6.444 9.778z"></path>
    </svg>
  );
};

Component.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Component.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Component;
