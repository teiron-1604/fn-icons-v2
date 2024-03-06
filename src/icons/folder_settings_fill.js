import React from 'react';
import PropTypes from 'prop-types';

const FolderSettingsFill = props => {
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
      <path d="M12.414 5H21a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2zm-3.823 8.809l-.991.572 1 1.731.991-.572c.393.371.872.653 1.405.811v1.145h1.999V16.35a3.494 3.494 0 001.404-.811l.991.572 1-1.73-.991-.573a3.508 3.508 0 000-1.622l.99-.573-.999-1.73-.992.572a3.495 3.495 0 00-1.404-.812V8.5h-1.999v1.144a3.495 3.495 0 00-1.404.812L8.6 9.883l-1 1.732.991.572a3.508 3.508 0 000 1.622zm3.404.688a1.5 1.5 0 11-.11-2.997 1.5 1.5 0 01.11 2.997z"></path>
    </svg>
  );
};

FolderSettingsFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FolderSettingsFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FolderSettingsFill;
