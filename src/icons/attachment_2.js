import React from 'react';
import PropTypes from 'prop-types';

const Attachment2 = props => {
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
      <path d="M14.828 7.757l-5.656 5.657a1 1 0 101.414 1.414l5.657-5.656A3 3 0 1012 4.929l-5.657 5.657a4.999 4.999 0 107.07 7.07L19.072 12l1.414 1.414-5.657 5.657a7 7 0 01-9.9-9.9l5.658-5.656a5 5 0 017.07 7.07L12 16.244A3 3 0 017.757 12l5.657-5.657 1.414 1.414z"></path>
    </svg>
  );
};

Attachment2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Attachment2.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Attachment2;
