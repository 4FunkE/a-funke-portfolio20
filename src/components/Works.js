import React from 'react';
import '../styles/Works.css';
import { Carousel } from 'react-responsive-carousel';

function Works() {
  return (
    <div className="Works-container">
      <div className="Works-header">
        <h2>The Works</h2>
        <p>
          Explore my web applications built with the MERN stack and more.
        </p>
      </div>
      <div className="project-carousel">
        <Carousel>
          {/* Add individual project slides here */}
          <div>
            <img src="/path/to/project1.png" alt="Project 1" />
            <p>Project 1 Description</p>
          </div>
          <div>
            <img src="/path/to/project2.png" alt="Project 2" />
            <p>Project 2 Description</p>
          </div>
          {/* Add more project slides as needed */}
        </Carousel>
      </div>
    </div>
  );
}

export default Works;