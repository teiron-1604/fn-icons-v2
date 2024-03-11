import React from 'react';
import PropTypes from 'prop-types';

const MvFill = props => {
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
      <g clipPath="url(#clip0_18_15304)">
        <path d="M2 3.993A1 1 0 012.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 01-.992.993H2.992A.993.993 0 012 20.007V3.993zm10 8.178A3 3 0 1014 15V7.999h3V6h-5v6.171z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15304">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

MvFill.propTypes = {
  color: PropTypes.string
};

MvFill.defaultProps = {
  color: 'currentColor'
};

export default MvFill;
