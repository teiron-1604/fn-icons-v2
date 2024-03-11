import React from 'react';
import PropTypes from 'prop-types';

const ScreenRotation = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 4v16h8V4H4zm-.2-2A1.8 1.8 0 002 3.8v16.4A1.8 1.8 0 003.8 22h8.4c.287 0 .559-.067.8-.187V22h6.6a2.4 2.4 0 002.4-2.4v-7.2a2.4 2.4 0 00-2.4-2.4H14V3.8A1.8 1.8 0 0012.2 2H3.8zm15.8 18H14v-8h5.6c.22 0 .4.18.4.4v7.2a.4.4 0 01-.4.4zM15.5 2a1 1 0 100 2A4.5 4.5 0 0120 8.5a1 1 0 102 0A6.5 6.5 0 0015.5 2z"
      ></path>
    </svg>
  );
};

ScreenRotation.propTypes = {
  color: PropTypes.string
};

ScreenRotation.defaultProps = {
  color: 'currentColor'
};

export default ScreenRotation;
