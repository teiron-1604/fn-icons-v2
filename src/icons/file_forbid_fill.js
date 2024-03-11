import React from 'react';
import PropTypes from 'prop-types';

const FileForbidFill = props => {
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
      <path d="M21 11.674A7 7 0 0012.255 22H3.993A1 1 0 013 21.008V2.992C3 2.444 3.445 2 3.993 2H16l5 5v4.674zM18 23a5 5 0 110-10 5 5 0 010 10zm-1.293-2.292a3 3 0 004.001-4.001l-4.001 4v.001zm-1.415-1.415l4.001-4a3 3 0 00-4.001 4.001v-.001z"></path>
    </svg>
  );
};

FileForbidFill.propTypes = {
  color: PropTypes.string
};

FileForbidFill.defaultProps = {
  color: 'currentColor'
};

export default FileForbidFill;
