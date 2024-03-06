import React from 'react';
import PropTypes from 'prop-types';

const VipCrownFill = props => {
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
      <path d="M2.8 5.2L7 8l4.186-5.86a1 1 0 011.628 0L17 8l4.2-2.8a1 1 0 011.547.95l-1.643 13.967a1 1 0 01-.993.883H3.889a1 1 0 01-.993-.883L1.253 6.149a1 1 0 011.547-.95zM12 15a2 2 0 100-4 2 2 0 000 4z"></path>
    </svg>
  );
};

VipCrownFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

VipCrownFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default VipCrownFill;
