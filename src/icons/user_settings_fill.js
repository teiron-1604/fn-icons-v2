import React from 'react';
import PropTypes from 'prop-types';

const UserSettingsFill = props => {
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
      <g clipPath="url(#clip0_18_13782)">
        <path d="M12 14v8H4a8 8 0 018-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm2.595 5.812a3.51 3.51 0 010-1.623l-.992-.573 1-1.732.992.573c.398-.377.88-.655 1.405-.812V13.5h2v1.145c.532.158 1.012.44 1.405.812l.992-.573 1 1.732-.992.573a3.511 3.511 0 010 1.622l.992.573-1 1.732-.992-.573c-.398.377-.88.655-1.405.812V22.5h-2v-1.145a3.497 3.497 0 01-1.405-.812l-.992.573-1-1.732.992-.572zM18 17a1 1 0 100 2 1 1 0 000-2z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13782">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UserSettingsFill.propTypes = {
  color: PropTypes.string
};

UserSettingsFill.defaultProps = {
  color: 'currentColor'
};

export default UserSettingsFill;
