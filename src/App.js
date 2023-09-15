import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/Footer";
// import AboutMe from "./components/AboutMe";
import "./App.css";

function App() {
    return (
      <div className="App">
        <PortfolioContainer />;
        {/* <AboutMe /> */}
        <Footer />
    </div>
  );
}

export default App;