import React from 'react';
import PropTypes from 'prop-types';

const StickyNote = props => {
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
      <path d="M21 15l-6 5.996L4.002 21A.998.998 0 013 20.007V3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.456.993 1.002V15zM19 5H5v14h8v-5a1 1 0 01.883-.993L14 13l5-.001V5zm-.829 9.999L15 15v3.169l3.171-3.17z"></path>
    </svg>
  );
};

StickyNote.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

StickyNote.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default StickyNote;
