import React from 'react';
import PropTypes from 'prop-types';

const AppsFill = props => {
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
      <path d="M6.75 2.5A4.25 4.25 0 0111 6.75V11H6.75a4.25 4.25 0 010-8.5zm0 10.5H11v4.25A4.25 4.25 0 116.75 13zm10.5-10.5a4.25 4.25 0 110 8.5H13V6.75a4.25 4.25 0 014.25-4.25zM13 13h4.25A4.25 4.25 0 1113 17.25V13z"></path>
    </svg>
  );
};

AppsFill.propTypes = {
  color: PropTypes.string
};

AppsFill.defaultProps = {
  color: 'currentColor'
};

export default AppsFill;
