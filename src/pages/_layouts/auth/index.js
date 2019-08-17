import React from 'react';
import PropTypes from 'prop-types';

// import { Wrapper, Content } from './styles';

export default function AuthLayout({ children }) {
  return <div>{children}</div>;
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
