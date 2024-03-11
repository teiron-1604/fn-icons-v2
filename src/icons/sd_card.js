import React from 'react';
import PropTypes from 'prop-types';

const SdCard = props => {
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
      <path d="M6 7.828V20h12V4H9.828L6 7.828zm-1.707-1.12L9 2h10a1 1 0 011 1v18a1 1 0 01-1 1H5a1 1 0 01-1-1V7.414a1 1 0 01.293-.707v.001zM15 5h2v4h-2V5zm-3 0h2v4h-2V5zM9 6h2v3H9V6z"></path>
    </svg>
  );
};

SdCard.propTypes = {
  color: PropTypes.string
};

SdCard.defaultProps = {
  color: 'currentColor'
};

export default SdCard;
