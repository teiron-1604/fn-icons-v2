import React from 'react';
import PropTypes from 'prop-types';

const Airplay = props => {
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
      <g clipPath="url(#clip0_18_13323)">
        <path d="M12.4 13.533l5 6.667a.5.5 0 01-.4.8H7a.5.5 0 01-.4-.8l5-6.667a.5.5 0 01.8 0zM12 16.33L10 19h4l-2-2.67zM18 19v-2h2V5H4v12h2v2H2.992A.996.996 0 012 18V4c0-.552.455-1 .992-1h18.016c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H18z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13323">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Airplay.propTypes = {
  color: PropTypes.string
};

Airplay.defaultProps = {
  color: 'currentColor'
};

export default Airplay;
