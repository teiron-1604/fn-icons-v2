import React from 'react';
import PropTypes from 'prop-types';

const LinkM = props => {
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
      <path d="M17.657 14.828l-1.414-1.414L17.657 12a3.998 3.998 0 00-1.298-6.524A4 4 0 0012 6.343l-1.414 1.414-1.414-1.414 1.414-1.414a6 6 0 018.485 8.485l-1.414 1.414zm-2.829 2.829l-1.414 1.414a6 6 0 11-8.485-8.485l1.414-1.414 1.414 1.414L6.343 12A4 4 0 1012 17.657l1.414-1.414 1.414 1.414zm0-9.9l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07v-.001z"></path>
    </svg>
  );
};

LinkM.propTypes = {
  color: PropTypes.string
};

LinkM.defaultProps = {
  color: 'currentColor'
};

export default LinkM;
