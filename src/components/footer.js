import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer>
      <nav>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/aboutMe" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/works" className="nav-link">
              Works
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <p>funk.E Codes</p>
    </footer>
  );
}

export default Footer;
