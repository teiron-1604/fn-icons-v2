import React from 'react';
import PropTypes from 'prop-types';

const Movie = props => {
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
      <g clipPath="url(#clip0_18_15268)">
        <path d="M2 3.993A1 1 0 012.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 01-.992.993H2.992A.993.993 0 012 20.007V3.993zM4 5v14h16V5H4zm6.622 3.415l4.879 3.252a.4.4 0 010 .666l-4.88 3.252a.4.4 0 01-.621-.332V8.747a.4.4 0 01.622-.332z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15268">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Movie.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Movie.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Movie;
