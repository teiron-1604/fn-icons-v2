import React from 'react';
import PropTypes from 'prop-types';

const AwardFill = props => {
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
      <path d="M17 15.245v6.872a.5.5 0 01-.757.429L12 20l-4.243 2.546a.5.5 0 01-.757-.43v-6.87a8 8 0 1110 0v-.001zM12 15a6 6 0 100-12 6 6 0 000 12zm0-2a4 4 0 110-8 4 4 0 010 8z"></path>
    </svg>
  );
};

AwardFill.propTypes = {
  color: PropTypes.string
};

AwardFill.defaultProps = {
  color: 'currentColor'
};

export default AwardFill;
