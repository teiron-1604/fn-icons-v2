import React from 'react';
import PropTypes from 'prop-types';

const InboxArchiveFill = props => {
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
      <path d="M4 3h16l2 4v13a1 1 0 01-1 1H3a1 1 0 01-1-1V7.004L4 3zm9 11v-4h-2v4H8l4 4 4-4h-3zm6.764-7l-1-2H5.237l-1 2h15.527z"></path>
    </svg>
  );
};

InboxArchiveFill.propTypes = {
  color: PropTypes.string
};

InboxArchiveFill.defaultProps = {
  color: 'currentColor'
};

export default InboxArchiveFill;
