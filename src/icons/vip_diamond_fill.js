import React from 'react';
import PropTypes from 'prop-types';

const VipDiamondFill = props => {
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
      <path d="M4.873 3h14.254a1 1 0 01.809.412l3.823 5.256a.5.5 0 01-.037.633L12.367 21.602a.5.5 0 01-.734 0L.278 9.302a.5.5 0 01-.037-.634l3.823-5.256A1 1 0 014.873 3z"></path>
    </svg>
  );
};

VipDiamondFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

VipDiamondFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default VipDiamondFill;
