import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header({ currentPage }) {
  return (
    <header>
      <div className="logo">
        <img 
        src="../../public/Funk.E_ArtLogo" 
        alt="Logo"
        style={{ width: '100px', height: '50px' }}
         />
      </div>
    
<nav>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/aboutMe"
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/portfolio"
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/resume"
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </Link>
      </li>
    </ul>
</nav>
</header>
  );
}

export default Header;