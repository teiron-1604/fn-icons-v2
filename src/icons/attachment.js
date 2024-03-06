import React from 'react';
import PropTypes from 'prop-types';

const Attachment = props => {
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
      <path d="M14 13.5V8a4 4 0 10-8 0v5.5a6.5 6.5 0 0013 0V4h2v9.5a8.5 8.5 0 11-17 0V8a6 6 0 1112 0v5.5a3.5 3.5 0 11-7 0V8h2v5.5a1.5 1.5 0 103 0z"></path>
    </svg>
  );
};

Attachment.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Attachment.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Attachment;
