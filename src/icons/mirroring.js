import React from 'react';
import PropTypes from 'prop-types';

const Mirroring = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.924 13.311C19.364 12.303 20 11.101 20 10s-.635-2.303-2.076-3.311C16.49 5.685 14.401 5 12 5c-2.401 0-4.49.685-5.924 1.689C4.636 7.697 4 8.899 4 10s.635 2.303 2.076 3.311C7.51 14.315 9.599 15 12 15c2.401 0 4.49-.685 5.924-1.689zM12 17c5.523 0 10-3.134 10-7s-4.477-7-10-7S2 6.134 2 10s4.477 7 10 7z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.554 17.168c.495.33 1.099.634 1.797.896C7.896 18.644 9.852 19 12 19s4.104-.356 5.65-.936a8.905 8.905 0 001.796-.896l1.108 1.665a10.9 10.9 0 01-2.201 1.103C16.555 20.612 14.356 21 12 21s-4.555-.388-6.353-1.064a10.897 10.897 0 01-2.201-1.104l1.108-1.665z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.06 9.5c.05-.042.133-.1.266-.166C10.703 9.145 11.293 9 12 9s1.297.145 1.674.334c.133.066.216.124.266.166-.05.042-.133.1-.266.166-.377.189-.967.334-1.674.334s-1.297-.145-1.674-.334a1.328 1.328 0 01-.266-.166zm-.629-1.955C10.141 7.19 11.05 7 12 7s1.86.19 2.569.545C15.218 7.87 16 8.503 16 9.5c0 .997-.782 1.63-1.431 1.955-.71.355-1.619.545-2.569.545s-1.86-.19-2.569-.545C8.782 11.13 8 10.497 8 9.5c0-.997.782-1.63 1.431-1.955z"
      ></path>
    </svg>
  );
};

Mirroring.propTypes = {
  color: PropTypes.string
};

Mirroring.defaultProps = {
  color: 'currentColor'
};

export default Mirroring;
