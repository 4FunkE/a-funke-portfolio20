//this is the portfolio container
import React, { useState } from 'react';
import '../styles/PortfolioContainer.css';

// Import all components
import Header from './Header';
import Home from './Home';
import AboutMe from './AboutMe';
import Works from './Works';
import Contact from './Contact';


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

 // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
 const renderPage = () => {
  if (currentPage === 'Home') {
    return <Home />;
  }
  if (currentPage === 'AboutMe') {
    return <AboutMe />;
  }
  if (currentPage === 'Works') {
    return <Works />;
  }
  return <Contact />;
};

const handlePageChange = (page) => setCurrentPage(page);

return (
  <div>
    {/* We are passing the currentPage from state and the function to update it */}
    <Header currentPage={currentPage} handlePageChange={handlePageChange} />
    {/* Here we are calling the renderPage method which will return a component  */}
    {renderPage()}
  </div>
);
}