import React from 'react';
import PropTypes from 'prop-types';

const MailSend = props => {
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
      <path d="M22 20.007a1 1 0 01-.992.993H2.992A.993.993 0 012 20.007V19h18V7.3l-8 7.2-10-9V4a1 1 0 011-1h18a1 1 0 011 1v16.007zM4.434 5L12 11.81 19.566 5H4.434zM0 15h8v2H0v-2zm0-5h5v2H0v-2z"></path>
    </svg>
  );
};

MailSend.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MailSend.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MailSend;
