import React from 'react';
import PropTypes from 'prop-types';

const Scissors = props => {
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
      <path d="M12 13.414l-2.554 2.554a4 4 0 11-1.414-1.414L10.586 12 4.565 5.98a2 2 0 010-2.83L12 10.587l7.435-7.435a2 2 0 010 2.828L13.415 12l2.553 2.554a4 4 0 11-1.414 1.414L12 13.414zM6 20a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4z"></path>
    </svg>
  );
};

Scissors.propTypes = {
  color: PropTypes.string
};

Scissors.defaultProps = {
  color: 'currentColor'
};

export default Scissors;
