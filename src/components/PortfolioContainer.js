//this is the portfolio container
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../styles/PortfolioContainer.css';

// Import all components
import Header from './Header';
import Home from './Home';
import AboutMe from './AboutMe';
import Works from './Works';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Route path="/" component={Home} />
        <Route path="/aboutMe" component={AboutMe} />
        <Route path="/Works" component={Works} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;