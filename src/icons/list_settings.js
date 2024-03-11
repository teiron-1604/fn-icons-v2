import React from 'react';
import PropTypes from 'prop-types';

const ListSettings = props => {
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
      <g clipPath="url(#clip0_18_11618)">
        <path d="M2 18h7v2H2v-2zm0-7h9v2H2v-2zm0-7h20v2H2V4zm18.674 9.025l1.156-.391 1 1.732-.916.805a4.017 4.017 0 010 1.658l.916.805-1 1.732-1.156-.391c-.41.37-.898.655-1.435.83L19 21h-2l-.24-1.196a3.996 3.996 0 01-1.434-.83l-1.156.392-1-1.732.916-.805a4.017 4.017 0 010-1.658l-.916-.805 1-1.732 1.156.391c.41-.37.898-.655 1.435-.83L17 11h2l.24 1.196c.536.174 1.024.46 1.434.83v-.001zM18 18a2 2 0 100-4 2 2 0 000 4z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_11618">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ListSettings.propTypes = {
  color: PropTypes.string
};

ListSettings.defaultProps = {
  color: 'currentColor'
};

export default ListSettings;
