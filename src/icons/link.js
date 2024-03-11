import React from 'react';
import PropTypes from 'prop-types';

const Link = props => {
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
      <path d="M18.364 15.536L16.95 14.12l1.414-1.414a5 5 0 10-7.071-7.07L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 119.9 9.9l-1.415 1.414h-.001zm-2.828 2.828l-1.415 1.414a7 7 0 11-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 107.071 7.071l1.414-1.414 1.415 1.414zm-.708-10.607l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z"></path>
    </svg>
  );
};

Link.propTypes = {
  color: PropTypes.string
};

Link.defaultProps = {
  color: 'currentColor'
};

export default Link;
