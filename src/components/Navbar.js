import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink exact to="/" activeClassName="active-link">
        Home
      </NavLink>
      <NavLink to="/about" activeClassName="active-link">
        About
      </NavLink>
      <NavLink to="/services" activeClassName="active-link">
        Services
      </NavLink>
      <NavLink to="/contact" activeClassName="active-link">
        Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;
