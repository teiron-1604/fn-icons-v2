import React from 'react';
import PropTypes from 'prop-types';

const ArchiveFill = props => {
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
      <path d="M3 10h18v10.004c0 .55-.445.996-.993.996H3.993A.994.994 0 013 20.004V10zm6 2v2h6v-2H9zM2 4c0-.552.455-1 .992-1h18.016c.548 0 .992.444.992 1v4H2V4z"></path>
    </svg>
  );
};

ArchiveFill.propTypes = {
  color: PropTypes.string
};

ArchiveFill.defaultProps = {
  color: 'currentColor'
};

export default ArchiveFill;
