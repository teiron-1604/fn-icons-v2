import React from 'react';
import PropTypes from 'prop-types';

const FileHistoryFill = props => {
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
      <path d="M16 2l5 4.999v14.01a.992.992 0 01-.993.991H3.993A1 1 0 013 21.008V2.992C3 2.444 3.445 2 3.993 2H16zm-3 7h-2v6h5v-2h-3V9z"></path>
    </svg>
  );
};

FileHistoryFill.propTypes = {
  color: PropTypes.string
};

FileHistoryFill.defaultProps = {
  color: 'currentColor'
};

export default FileHistoryFill;
