import React from 'react';
import PropTypes from 'prop-types';

const ClapperboardFill = props => {
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
      <g clipPath="url(#clip0_18_15119)">
        <path d="M17.998 7l2.31-4h.7c.548 0 .992.445.992.993v16.014a1 1 0 01-.992.993H2.992A.993.993 0 012 20.007V3.993A1 1 0 012.992 3h3.006l-2.31 4h2.31l2.31-4h3.69l-2.31 4h2.31l2.31-4h3.69l-2.31 4h2.31z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15119">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ClapperboardFill.propTypes = {
  color: PropTypes.string
};

ClapperboardFill.defaultProps = {
  color: 'currentColor'
};

export default ClapperboardFill;
