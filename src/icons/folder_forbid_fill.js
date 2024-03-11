import React from 'react';
import PropTypes from 'prop-types';

const FolderForbidFill = props => {
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
      <g clipPath="url(#clip0_18_13258)">
        <path d="M22 11.255A7 7 0 0012.255 21H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2H21a1 1 0 011 1v5.255zM18 22a5 5 0 110-10 5 5 0 010 10zm-1.293-2.292a3 3 0 004.001-4.001l-4.001 4v.001zm-1.415-1.415l4.001-4a3 3 0 00-4.001 4.001v-.001z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13258">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FolderForbidFill.propTypes = {
  color: PropTypes.string
};

FolderForbidFill.defaultProps = {
  color: 'currentColor'
};

export default FolderForbidFill;
