import React from 'react';
import PropTypes from 'prop-types';

const Router = props => {
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
      <path d="M11 14v-3h2v3h5a1 1 0 011 1v6a1 1 0 01-1 1H6a1 1 0 01-1-1v-6a1 1 0 011-1h5zM2.51 8.837C3.835 4.864 7.584 2 12 2s8.166 2.864 9.49 6.837l-1.898.632a8.003 8.003 0 00-15.184 0l-1.897-.632H2.51zm3.796 1.265a6.003 6.003 0 0111.388 0l-1.898.633a4.002 4.002 0 00-7.592 0l-1.898-.633zM7 16v4h10v-4H7z"></path>
    </svg>
  );
};

Router.propTypes = {
  color: PropTypes.string
};

Router.defaultProps = {
  color: 'currentColor'
};

export default Router;
