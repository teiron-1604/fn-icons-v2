import React from 'react';
import PropTypes from 'prop-types';

const VipDiamond = props => {
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
      <path d="M4.873 3h14.254a1 1 0 01.809.412l3.823 5.256a.5.5 0 01-.037.633L12.367 21.602a.5.5 0 01-.706.028c-.007-.006-3.8-4.115-11.383-12.329a.5.5 0 01-.037-.633l3.823-5.256A1 1 0 014.873 3zm.51 2l-2.8 3.85L12 19.05l9.417-10.2-2.8-3.85H5.383z"></path>
    </svg>
  );
};

VipDiamond.propTypes = {
  color: PropTypes.string
};

VipDiamond.defaultProps = {
  color: 'currentColor'
};

export default VipDiamond;
