import React from 'react';
import PropTypes from 'prop-types';

const Computer = props => {
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
      <g clipPath="url(#clip0_18_13375)">
        <path d="M4 16h16V5H4v11zm9 2v2h4v2H7v-2h4v-2H2.992A1 1 0 012 16.993V4.007C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007v12.986c0 .556-.455 1.007-.992 1.007H13z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13375">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Computer.propTypes = {
  color: PropTypes.string
};

Computer.defaultProps = {
  color: 'currentColor'
};

export default Computer;
