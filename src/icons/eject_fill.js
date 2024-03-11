import React from 'react';
import PropTypes from 'prop-types';

const EjectFill = props => {
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
      <g clipPath="url(#clip0_18_15161)">
        <path d="M12.416 3.624l7.066 10.599a.5.5 0 01-.416.777H4.934a.5.5 0 01-.416-.777l7.066-10.599a.5.5 0 01.832 0zM5 17h14a1 1 0 110 2H5a1 1 0 010-2z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15161">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

EjectFill.propTypes = {
  color: PropTypes.string
};

EjectFill.defaultProps = {
  color: 'currentColor'
};

export default EjectFill;
