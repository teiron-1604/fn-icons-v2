import React from 'react';
import PropTypes from 'prop-types';

const SkipBack = props => {
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
      <g clipPath="url(#clip0_18_15480)">
        <path d="M8 11.333l10.223-6.815a.5.5 0 01.777.416v14.132a.5.5 0 01-.777.416L8 12.667V19a1 1 0 11-2 0V5a1 1 0 012 0v6.333zm9 4.93V7.737L10.606 12 17 16.263z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15480">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

SkipBack.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SkipBack.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SkipBack;
