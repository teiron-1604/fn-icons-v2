import React from 'react';
import PropTypes from 'prop-types';

const BroadcastFill = props => {
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
      <path d="M4.929 2.93l1.414 1.413A7.975 7.975 0 004 10c0 2.21.895 4.21 2.343 5.657L4.93 17.07A9.97 9.97 0 012 10a9.969 9.969 0 012.929-7.07zm14.142 0A9.968 9.968 0 0122 10a9.968 9.968 0 01-2.929 7.071l-1.414-1.414A7.973 7.973 0 0020 10c0-2.21-.895-4.21-2.343-5.657L19.07 2.93h.001zM7.757 5.756l1.415 1.415A3.987 3.987 0 008 10c0 1.105.448 2.105 1.172 2.828l-1.415 1.415A5.982 5.982 0 016 10c0-1.657.672-3.157 1.757-4.243zm8.486 0A5.982 5.982 0 0118 10a5.983 5.983 0 01-1.757 4.243l-1.415-1.415A3.987 3.987 0 0016 10a3.986 3.986 0 00-1.172-2.828l1.415-1.415zM12 12a2 2 0 110-4 2 2 0 010 4zm0 2c.58 0 1.077.413 1.184.983L14.5 22h-5l1.316-7.017c.107-.57.604-.983 1.184-.983z"></path>
    </svg>
  );
};

BroadcastFill.propTypes = {
  color: PropTypes.string
};

BroadcastFill.defaultProps = {
  color: 'currentColor'
};

export default BroadcastFill;
