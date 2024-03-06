import React from 'react';
import PropTypes from 'prop-types';

const FastBackward = props => {
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
      <path d="M12 10.667l9.223-6.149a.5.5 0 01.777.416v14.132a.5.5 0 01-.777.416L12 13.333v5.733a.5.5 0 01-.777.416L.624 12.416a.5.5 0 010-.832l10.599-7.066a.5.5 0 01.777.416v5.733zm-2 5.596V7.737L3.606 12 10 16.263zm10 0V7.737L13.606 12 20 16.263z"></path>
    </svg>
  );
};

FastBackward.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FastBackward.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FastBackward;
