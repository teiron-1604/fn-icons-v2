import React from 'react';
import PropTypes from 'prop-types';

const FilePpt = props => {
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
      <path d="M2.859 2.877l12.57-1.795a.5.5 0 01.571.495v20.846a.5.5 0 01-.57.495L2.858 21.123a1 1 0 01-.859-.99V3.867a1 1 0 01.859-.99h.001zM4 4.735v14.53l10 1.43V3.305L4 4.736zM17 19h3V5h-3V3h4a1 1 0 011 1v16a1 1 0 01-1 1h-4v-2zM5 8h8v6H7v2H5V8zm2 2v2h4v-2H7z"></path>
    </svg>
  );
};

FilePpt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FilePpt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FilePpt;
