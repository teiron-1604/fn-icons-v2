import React from 'react';
import PropTypes from 'prop-types';

const ContactsBookFill = props => {
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
      <path d="M20 22H6a3 3 0 01-3-3V5a3 3 0 013-3h14a1 1 0 011 1v18a1 1 0 01-1 1zm-1-2v-2H6a1 1 0 000 2h13zm-7-10a2 2 0 100-4 2 2 0 000 4zm-3 4h6a3 3 0 00-6 0z"></path>
    </svg>
  );
};

ContactsBookFill.propTypes = {
  color: PropTypes.string
};

ContactsBookFill.defaultProps = {
  color: 'currentColor'
};

export default ContactsBookFill;
