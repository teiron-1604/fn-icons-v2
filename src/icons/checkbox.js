import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = props => {
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
      <g clipPath="url(#clip0_18_14572)">
        <path d="M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm1 2v14h14V5H5zm6.003 11L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14572">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Checkbox.propTypes = {
  color: PropTypes.string
};

Checkbox.defaultProps = {
  color: 'currentColor'
};

export default Checkbox;
