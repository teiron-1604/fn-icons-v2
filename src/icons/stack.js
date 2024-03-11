import React from 'react';
import PropTypes from 'prop-types';

const Stack = props => {
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
      <path d="M20.083 15.2l1.202.721a.5.5 0 010 .858l-8.77 5.262a1 1 0 01-1.03 0l-8.77-5.262a.5.5 0 010-.858l1.202-.72L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 010 .858L12 17.65l-9.285-5.57a.5.5 0 010-.859l1.202-.72L12 15.35l8.083-4.85zm-7.569-9.19l8.771 5.261a.5.5 0 010 .858L12 13 2.715 7.43a.5.5 0 010-.859l8.77-5.262a1 1 0 011.03 0h-.001zM12 3.331L5.887 7 12 10.668 18.113 7 12 3.332z"></path>
    </svg>
  );
};

Stack.propTypes = {
  color: PropTypes.string
};

Stack.defaultProps = {
  color: 'currentColor'
};

export default Stack;
