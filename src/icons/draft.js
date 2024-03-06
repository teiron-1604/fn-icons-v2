import React from 'react';
import PropTypes from 'prop-types';

const Draft = props => {
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
      <path d="M20 2a1 1 0 011 1v3.757l-2 2V4H5v16h14v-2.758l2-2V21a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1h16zm1.778 6.808l1.414 1.414L15.414 18l-1.416-.002.002-1.412 7.778-7.778zM13 12v2H8v-2h5zm3-4v2H8V8h8z"></path>
    </svg>
  );
};

Draft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Draft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Draft;
