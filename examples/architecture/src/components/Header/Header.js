import React from 'react';
import { IndexLink, Link } from 'react-router';

export const Header = () => (
  <header className="header">
    <h1 className="header-title">Dashboard</h1>
    <IndexLink to="/" className="header-item" activeClassName="active">
      Dashboard
    </IndexLink>
    <Link to="/counter" className="header-item" activeClassName="active">
      Counter
    </Link>
  </header>
);

export default Header;
