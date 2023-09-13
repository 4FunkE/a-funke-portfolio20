//this is the portfolio container
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './PortfolioContainer.css';

// Import all components
import Header from './Header';
import Home from './Home';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Route path="/" component={Home} />
        <Route path="/aboutMe" component={AboutMe} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;