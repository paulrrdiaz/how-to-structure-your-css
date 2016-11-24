import React from 'react';
import Header from '../../components/Header';
import '../../styles/application.scss';

export const CoreLayout = ({ children }) => (
  <div className="layout-container">
    <Header />
    <div className="layout-content">
      {children}
    </div>
  </div>
);

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default CoreLayout;
