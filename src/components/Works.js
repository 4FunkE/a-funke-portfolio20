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
            <img src='/works/codeQuiz.png' alt="codeQuiz" />
            <p>Project 1 Description</p>
          </div>
          <div>
            <img src="/works/eCommerceV.png" alt="eCommerceV" />
            <p>Project 2 Description</p>
          </div>
          <div>
            <img src="/works/employeeDbV.png" alt="employeeDbV" />
            <p>Project 1 Description</p>
          </div>
          <div>
            <img src="/works/horiseonRefactor.png" alt="horiseonRefactor" />
            <p>Project 1 Description</p>
          </div>
          <div>
            <img src="/works/logoGeneratorV.png" alt="logoGeneratorV" />
            <p>Project 1 Description</p>
          </div>
          <div>
            <img src="/works/notes.png" alt="notes" />
            <p>Project 1 Description</p>
          </div>
          <div>
            <img src="/works/passwordGenerator.png" alt="passwordGenerator" />
            <p>Project 1 Description</p>
          </div>
          <div>
            <img src="/works/portfolio1.png" alt="portfolio1" />
            <p>Project 1 Description</p>
          </div>
          <div>
            <img src="/works/READMEGeneratorV.png" alt="READMEGeneratorV" />
            <p>Project 1 Description</p>
          </div>
          <div>
            <img src="/works/studentMark.png" alt="studentMark" />
            <p>Project 1 Description</p>
          </div>
          <div>
            <img src="/works/studyGuide.png" alt="studyGuide" />
            <p>Project 1 Description</p>
          </div>
          <div>
            <img src="/works/techBlog.png" alt="techBlog" />
            <p>Project 1 Description</p>
          </div>
          <div>
            <img src="/works/weatherApp.png" alt="weatherApp" />
            <p>Project 1 Description</p>
          </div>
          <div>
            <img src="/works/workDayScheduler.png" alt="workDayScheduler" />
            <p>Project 1 Description</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Works;