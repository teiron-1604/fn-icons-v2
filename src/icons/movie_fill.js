import React from 'react';
import PropTypes from 'prop-types';

const MovieFill = props => {
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
      <g clipPath="url(#clip0_18_15274)">
        <path d="M2 3.993A1 1 0 012.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 01-.992.993H2.992A.993.993 0 012 20.007V3.993zm8.622 4.422a.4.4 0 00-.622.332v6.506a.4.4 0 00.622.332l4.879-3.252a.4.4 0 000-.666l-4.88-3.252h.001z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15274">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

MovieFill.propTypes = {
  color: PropTypes.string
};

MovieFill.defaultProps = {
  color: 'currentColor'
};

export default MovieFill;
