import React from 'react';
import PropTypes from 'prop-types';

const AccountCircle = props => {
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
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-4.987-3.744A7.966 7.966 0 0012 20a7.97 7.97 0 005.167-1.892A6.978 6.978 0 0012.16 16a6.982 6.982 0 00-5.147 2.256zM5.616 16.82A8.975 8.975 0 0112.16 14a8.972 8.972 0 016.362 2.634 8 8 0 10-12.906.187v-.001zM12 13a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z"></path>
    </svg>
  );
};

AccountCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AccountCircle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AccountCircle;
