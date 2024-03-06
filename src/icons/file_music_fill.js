import React from 'react';
import PropTypes from 'prop-types';

const FileMusicFill = props => {
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
      <path d="M16 2l5 5v14.008a.993.993 0 01-.993.992H3.993A1 1 0 013 21.008V2.992C3 2.444 3.445 2 3.993 2H16zm-5 10.05a2.5 2.5 0 102 2.45V10h3V8h-5v4.05z"></path>
    </svg>
  );
};

FileMusicFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FileMusicFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FileMusicFill;
