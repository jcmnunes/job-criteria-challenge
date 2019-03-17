import React from 'react';
import PropTypes from 'prop-types';
import theme from '../../styles/theme';

export const IconCheckmark = ({ size, primaryColor }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
    <path fill={primaryColor} d="M6.5 11.5L5 13l5.5 5L19 8.5 17.5 7l-7 8z" />
  </svg>
);

IconCheckmark.defaultProps = {
  size: 24,
  primaryColor: '#fff',
};

IconCheckmark.propTypes = {
  size: PropTypes.number,
  primaryColor: PropTypes.string,
};

export const IconWarning = ({ size, primaryColor, secondaryColor }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16">
    <path
      fill={primaryColor}
      d="M7.11 1.27c.49-1 1.29-1 1.79 0l6.21 12.42A1.14 1.14 0 0 1 14 15.48H2a1.13 1.13 0 0 1-1.1-1.79z"
    />
    <path fill={secondaryColor} d="M7 6.48v4h2v-4zm2 7v-2H7v2z" />
  </svg>
);

IconWarning.defaultProps = {
  size: 16,
  primaryColor: theme.red500,
  secondaryColor: '#ffffff',
};

IconWarning.propTypes = {
  size: PropTypes.number,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
};
