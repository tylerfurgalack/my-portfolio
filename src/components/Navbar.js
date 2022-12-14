import React from 'react';

import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="#" className="navbar-link">
            About
          </a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">
            Projects
          </a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;