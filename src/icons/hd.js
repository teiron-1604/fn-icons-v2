import React from 'react';
import PropTypes from 'prop-types';

const Hd = props => {
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
      <g clipPath="url(#clip0_18_15041)">
        <path d="M4 5v14h16V5H4zM3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm4.5 8.25h2V9H11v6H9.5v-2.25h-2V15H6V9h1.5v2.25zm7-.75v3H16a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-1.5zM13 9h3a2 2 0 012 2v2a2 2 0 01-2 2h-3V9z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15041">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Hd.propTypes = {
  color: PropTypes.string
};

Hd.defaultProps = {
  color: 'currentColor'
};

export default Hd;
