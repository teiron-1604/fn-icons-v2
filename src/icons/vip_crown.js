import React from 'react';
import PropTypes from 'prop-types';

const VipCrown = props => {
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
      <path d="M3.492 8.065L4.778 19h14.444l1.286-10.935-4.01 2.673L12 4.44l-4.498 6.297-4.01-2.673zM2.8 5.2L7 8l4.186-5.86a1 1 0 011.628 0L17 8l4.2-2.8a1 1 0 011.547.95l-1.643 13.967a1 1 0 01-.993.883H3.889a1 1 0 01-.993-.883L1.253 6.149a1 1 0 011.547-.95zM12 15a2 2 0 110-4 2 2 0 010 4z"></path>
    </svg>
  );
};

VipCrown.propTypes = {
  color: PropTypes.string
};

VipCrown.defaultProps = {
  color: 'currentColor'
};

export default VipCrown;
