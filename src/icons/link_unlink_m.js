import React from 'react';
import PropTypes from 'prop-types';

const LinkUnlinkM = props => {
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
      <path d="M17.657 14.828l-1.414-1.414L17.657 12a3.998 3.998 0 00-1.298-6.524A4 4 0 0012 6.343l-1.414 1.414-1.414-1.414 1.414-1.414a6 6 0 018.485 8.485l-1.414 1.414zm-2.829 2.829l-1.414 1.414a6 6 0 11-8.485-8.485l1.414-1.414 1.414 1.414L6.343 12A4 4 0 1012 17.657l1.414-1.414 1.414 1.414zm0-9.9l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07v-.001zM5.775 2.293l1.932-.518L8.742 5.64l-1.931.518-1.036-3.864v-.001zm9.483 16.068l1.931-.518 1.036 3.864-1.932.518-1.035-3.864zM2.293 5.775L6.157 6.81l-.518 1.93-3.864-1.034.518-1.932zm16.068 9.483l3.864 1.035-.518 1.932-3.864-1.036.518-1.931z"></path>
    </svg>
  );
};

LinkUnlinkM.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LinkUnlinkM.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default LinkUnlinkM;
