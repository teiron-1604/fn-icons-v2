import React from 'react';
import PropTypes from 'prop-types';

const BellOffFill = props => {
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
      <path d="M18.586 20H4a.5.5 0 01-.4-.8l.4-.533V10c0-1.33.324-2.584.9-3.687L1.392 2.808l1.415-1.415 19.8 19.8-1.416 1.414L18.586 20zM20 15.786L7.56 3.346A8 8 0 0120 10v5.786zM9.5 21h5a2.5 2.5 0 11-5 0z"></path>
    </svg>
  );
};

BellOffFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BellOffFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BellOffFill;
