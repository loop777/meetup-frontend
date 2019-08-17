import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header';

// import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
