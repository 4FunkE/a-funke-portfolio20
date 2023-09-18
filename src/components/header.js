import React, { useState, useEffect } from "react";
import "../styles/Header.css";

function Header(props) {
  const [currentPage, handlePageChange] = useState("Home");
  const [isHovered, setIsHovered] = useState(false); // State to track hover

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

  const handleMouseEnter = () => {
    setIsHovered(true); // Set hover state to true on mouse enter
  };

  const handleMouseLeave = () => {
    setIsHovered(false); // Set hover state to false on mouse leave
  };


  const handleRouteChange = (route) => {
    // Update currentPage based on route
    switch (route) {
      case "/home":
        handlePageChange("Home");
        break;
      case "/aboutMe":
        handlePageChange("About");
        break;
      case "/works":
        handlePageChange("Works");
        break;
      case "/contact":
        handlePageChange("Contact");
        break;
      default:
        handlePageChange("Home"); // Set a default page for unknown routes
    }
  };

  return (
    <header>
      <div class='flex'>
      <div 
        className= {`logo-container ${isHovered ? "hovered" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="logo"></div>
        {isHovered && (
          <div className="caption">Designer Logo</div>
        )}
      </div>
      </div>

      <nav class= 'nav-container'>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              href="#home"
              onClick={() => props.handlePageChange('Home')}
              className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#aboutMe"
              onClick={() => props.handlePageChange('About')}
              className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#works"
              onClick={() => props.handlePageChange('Works')}
              className={props.currentPage === "Works" ? "nav-link active" : "nav-link"}
            >
              Works
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={() => props.handlePageChange('Contact')}
              className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;