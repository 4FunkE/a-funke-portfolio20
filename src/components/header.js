import React, { useState, useEffect } from "react";
import "../styles/Header.css";

function Header() {
  const [currentPage, setCurrentPage] = useState("Home");

  useEffect(() => {
    // Handle initial route based on window location
    handleRouteChange(window.location.pathname);

    // Listen for route changes and update currentPage
    const handlePopState = () => {
      handleRouteChange(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const handleRouteChange = (route) => {
    // Update currentPage based on route
    switch (route) {
      case "/":
        setCurrentPage("Home");
        break;
      case "/aboutMe":
        setCurrentPage("About");
        break;
      case "/works":
        setCurrentPage("Works");
        break;
      case "/contact":
        setCurrentPage("Contact");
        break;
      case "/resume":
        setCurrentPage("Resume");
        break;
      default:
        setCurrentPage("Home"); // Set a default page for unknown routes
    }
  };

  return (
    <header>
      <div className="logo">
        <img
          src='./Funk.E_ArtLogo'
          alt="Funk.E_ArtLogo"
          style={{ width: "100px", height: "50px" }}
        />
      </div>

      <nav>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              href="/"
              className={currentPage === "Home" ? "nav-link active" : "nav-link"}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/aboutMe"
              className={currentPage === "About" ? "nav-link active" : "nav-link"}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/works"
              className={currentPage === "Works" ? "nav-link active" : "nav-link"}
            >
              Works
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/contact"
              className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/resume"
              className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;