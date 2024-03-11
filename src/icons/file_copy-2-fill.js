import React from 'react';
import PropTypes from 'prop-types';

const FileCopy2Fill = props => {
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
      <g clipPath="url(#clip0_18_12927)">
        <path d="M7 6V3a1 1 0 011-1h12a1 1 0 011 1v14a1 1 0 01-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1 1 0 013 21l.003-14c0-.552.45-1 1.007-1H7zm2 0h8v10h2V4H9v2zm-2 5v2h6v-2H7zm0 4v2h6v-2H7z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_12927">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FileCopy2Fill.propTypes = {
  color: PropTypes.string
};

FileCopy2Fill.defaultProps = {
  color: 'currentColor'
};

export default FileCopy2Fill;
