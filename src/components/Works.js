import React from 'react';
import '../styles/Works.css';
import { Carousel } from 'react-responsive-carousel';

function Works() {
  return (
    <div className="Works-container">
      <div className="Works-header">
        <h2>The Works</h2>
        <p>
        Embark on a journey through my captivating web applications, 
        meticulously crafted using the powerful MERN stack and other 
        innovative technologies. Each project is a testament to my passion 
        for design and development, offering unique experiences and solutions.
        </p>
      </div>
      <div className="project-carousel">
        <Carousel>
          {/* Individual project slides here */}
          <div>
            <img src="/path/to/project1.png" alt="Project 1" />
            <p>Project 1 Description</p>
          </div>
          <div>
            <img src="/path/to/project2.png" alt="Project 2" />
            <p>Project 2 Description</p>
          </div>
          <div>
            <img src="/path/to/project1.png" alt="Project 1" />
            <p>Project 1 Description</p>
          </div>
          <div>
            <img src="/path/to/project1.png" alt="Project 1" />
            <p>Project 1 Description</p>
          </div>
          <div>
            <img src="/path/to/project1.png" alt="Project 1" />
            <p>Project 1 Description</p>
          </div>
          <div>
            <img src="/path/to/project1.png" alt="Project 1" />
            <p>Project 1 Description</p>
          </div>
          <div>
            <img src="/path/to/project1.png" alt="Project 1" />
            <p>Project 1 Description</p>
          </div>
          <div>
            <img src="/path/to/project1.png" alt="Project 1" />
            <p>Project 1 Description</p>
          </div>
          <div>
            <img src="/path/to/project1.png" alt="Project 1" />
            <p>Project 1 Description</p>
          </div>
          <div>
            <img src="/path/to/project1.png" alt="Project 1" />
            <p>Project 1 Description</p>
          </div>
          <div>
            <img src="/path/to/project1.png" alt="Project 1" />
            <p>Project 1 Description</p>
          </div>
          <div>
            <img src="/path/to/project1.png" alt="Project 1" />
            <p>Project 1 Description</p>
          </div>
          <div>
            <img src="/path/to/project1.png" alt="Project 1" />
            <p>Project 1 Description</p>
          </div>
          <div>
            <img src="/path/to/project1.png" alt="Project 1" />
            <p>Project 1 Description</p>
          </div>
          <div>
            <img src="/path/to/project1.png" alt="Project 1" />
            <p>Project 1 Description</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Works;