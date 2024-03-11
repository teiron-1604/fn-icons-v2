import React from 'react';
import PropTypes from 'prop-types';

const ArchiveDrawerFill = props => {
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
      <path d="M3 13h18v8.002a.996.996 0 01-.993.998H3.993A.996.996 0 013 21.002V13zM3 2.998C3 2.447 3.445 2 3.993 2h16.014c.548 0 .993.446.993.998V11H3V2.998zM9 5v2h6V5H9zm0 11v2h6v-2H9z"></path>
    </svg>
  );
};

ArchiveDrawerFill.propTypes = {
  color: PropTypes.string
};

ArchiveDrawerFill.defaultProps = {
  color: 'currentColor'
};

export default ArchiveDrawerFill;
