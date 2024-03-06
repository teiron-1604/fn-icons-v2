import React from 'react';
import PropTypes from 'prop-types';

const FolderForbid = props => {
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
      <g clipPath="url(#clip0_18_13252)">
        <path d="M22 11.255a6.97 6.97 0 00-2-.965V7h-8.414l-2-2H4v14h7.29a6.96 6.96 0 00.965 2H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2H21a1 1 0 011 1v5.255zM18 22a5 5 0 110-10 5 5 0 010 10zm-1.293-2.292a3 3 0 004.001-4.001l-4.001 4v.001zm-1.415-1.415l4.001-4a3 3 0 00-4.001 4.001v-.001z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13252">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FolderForbid.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FolderForbid.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FolderForbid;
