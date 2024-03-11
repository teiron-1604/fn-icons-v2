import React from 'react';
import PropTypes from 'prop-types';

const CameraOffFill = props => {
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
      <g clipPath="url(#clip0_18_15102)">
        <path d="M19.586 21H3a1 1 0 01-1-1V6a1 1 0 011-1h.586L1.393 2.808l1.415-1.415 19.799 19.8-1.415 1.414L19.586 21zM7.556 8.97a6 6 0 008.475 8.475l-1.417-1.417a4 4 0 01-5.642-5.642L7.555 8.97zM22 17.785l-4.045-4.045a6 6 0 00-6.695-6.695L8.106 3.892 9 3h6l2 2h4a1 1 0 011 1v11.786-.001zm-8.492-8.492a4.012 4.012 0 012.198 2.198l-2.198-2.198z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15102">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

CameraOffFill.propTypes = {
  color: PropTypes.string
};

CameraOffFill.defaultProps = {
  color: 'currentColor'
};

export default CameraOffFill;
