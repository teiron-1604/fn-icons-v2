import React from 'react';
import PropTypes from 'prop-types';

const FileSettings = props => {
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
      <path d="M8.595 12.812a3.51 3.51 0 010-1.623l-.992-.573 1-1.732.992.573c.398-.377.88-.655 1.405-.812V7.5h2v1.145c.532.158 1.012.44 1.405.812l.992-.573 1 1.732-.992.573a3.511 3.511 0 010 1.622l.992.573-1 1.732-.992-.573c-.398.377-.88.655-1.405.812V16.5h-2v-1.145a3.496 3.496 0 01-1.405-.812l-.992.573-1-1.732.992-.572zM12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM15 4H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0120.007 22H3.993A1 1 0 013 21.008V2.992z"></path>
    </svg>
  );
};

FileSettings.propTypes = {
  color: PropTypes.string
};

FileSettings.defaultProps = {
  color: 'currentColor'
};

export default FileSettings;
