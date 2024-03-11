import React from 'react';
import PropTypes from 'prop-types';

const QrCodeFill = props => {
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
      <g clipPath="url(#clip0_18_13496)">
        <path d="M16 17v-1h-3v-3h3v2h2v2h-1v2h-2v2h-2v-3h2v-1h1zm5 4h-4v-2h2v-2h2v4zM3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm15 0h3v2h-3v-2zM6 6v2h2V6H6zm0 10v2h2v-2H6zM16 6v2h2V6h-2z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13496">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

QrCodeFill.propTypes = {
  color: PropTypes.string
};

QrCodeFill.defaultProps = {
  color: 'currentColor'
};

export default QrCodeFill;
