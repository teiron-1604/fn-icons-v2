import React from 'react';
import PropTypes from 'prop-types';

const AccountBoxFill = props => {
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
      <path d="M3 4.995C3 3.893 3.893 3 4.995 3h14.01C20.107 3 21 3.893 21 4.995v14.01A1.995 1.995 0 0119.005 21H4.995A1.995 1.995 0 013 19.005V4.995zM6.357 18h11.49a6.992 6.992 0 00-5.745-3 6.992 6.992 0 00-5.745 3zM12 13a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"></path>
    </svg>
  );
};

AccountBoxFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AccountBoxFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AccountBoxFill;
