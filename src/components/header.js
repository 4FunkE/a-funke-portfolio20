// In terms of your nav links, currently you are 
//redirecting the page using hrefs and <a> elements. 
//With react, you have to create different components. 
//You have the correct logic in your PortfolioContainer.js 
//so you can do something similar for header.js. You can also 
//look at ctivity 24 from week 20 on conditional rendering on 
//how to do it. Here is a resource that may help you also:

import React, { useState, useEffect } from "react";
import "../styles/Header.css";

function Header() {
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
    <header class='logo-container'>
      <div
        className={`logo-container ${isHovered ? "hovered" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="logo"></div>
        {isHovered && (
          <div className="caption">Designer Logo</div>
        )}
      </div>

      <nav class= 'nav-container'>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              href="#home"
              onClick={() => handlePageChange('Home')}
              className={currentPage === "Home" ? "nav-link active" : "nav-link"}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#aboutMe"
              onClick={() => handlePageChange('About')}
              className={currentPage === "About" ? "nav-link active" : "nav-link"}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#works"
              onClick={() => handlePageChange('Works')}
              className={currentPage === "Works" ? "nav-link active" : "nav-link"}
            >
              Works
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
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