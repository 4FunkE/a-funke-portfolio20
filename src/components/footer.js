import React from 'react';
import '../styles/Footer.css';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <button className="scroll-to-top-button" onClick={scrollToTop}>
        Scroll to Top
      </button>
      <p class='p'>Funk.E_Codes</p>
    </footer>
  );
}

export default Footer;
