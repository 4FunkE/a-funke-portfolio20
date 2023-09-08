import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './PortfolioContainer.css';

// Import all components
import Header from './Header';
import Home from './Home';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import Footer from './Footer';

function PortfolioContainer() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/aboutMe" component={AboutMe} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default PortfolioContainer;