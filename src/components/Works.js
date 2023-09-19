import React from 'react';
import '../styles/Works.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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
            <a href="https://4funke.github.io/quiz-for-coders-funk/">
              <p>Project 1 Description</p>
            </a>
          </div>
          <div>
            <img src="/works/eCommerceV.png" alt="eCommerceV" />
            <a href="https://drive.google.com/file/d/1-aT0zIgB_8ntHSX02-b2sLZ8LYU-dqJY/view">
              <p>Project 1 Description</p>
            </a>
          </div>
          <div>
            <img src="/works/employeeDbV.png" alt="employeeDbV" />
            <a href="https://drive.google.com/file/d/1yrz7WXBZnYWIXs9F_yrXrT-nXjv08tSp/view">
              <p>Project 1 Description</p>
            </a>
          </div>
          <div>
            <img src="/works/horiseonRefactor.png" alt="horiseonRefactor" />
            <a href="http://4funke.github.io/challenge1/">
              <p>Project 1 Description</p>
            </a>
          </div>
          <div>
            <img src="/works/logoGeneratorV.png" alt="logoGeneratorV" />
            <a href="https://drive.google.com/file/d/1xMz8emwvcY_iMejW15LJNOEgtDO1w4QV/view">
              <p>Project 1 Description</p>
            </a>
          </div>
          <div>
            <img src="/works/notes.png" alt="notes" />
            <a href="https://peaceful-sea-55951-74e9b2c9bca6.herokuapp.com/">
              <p>Project 1 Description</p>
            </a>
          </div>
          <div>
            <img src="/works/passwordGenerator.png" alt="passwordGenerator" />
            <a href="https://4funke.github.io/password-generator-challenge-funk/">
              <p>Project 1 Description</p>
            </a>
          </div>
          <div>
            <img src="/works/portfolio1.png" alt="portfolio1" />
            <a href="https://4funke.github.io/funk-code-protfolio/">
              <p>Project 1 Description</p>
            </a>
          </div>
          <div>
            <img src="/works/READMEGeneratorV.png" alt="READMEGeneratorV" />
            <a href="https://drive.google.com/file/d/1DSXcjSqRCzwha_lXL1ij8fyZMRQ6od0U/view">
              <p>Project 1 Description</p>
            </a>
          </div>
          <div>
            <img src="/works/studentMark.png" alt="🍎studentMark" />
              <a href="https://shielded-everglades-30738-44134476de15.herokuapp.com/">
                <p>Project 1 Description</p>
              </a>
          </div>
          <div>
            <img src="/works/studyGuide.png" alt="studyGuide" />
            <a href="https://4funke.github.io/prework-study-guide/">
              <p>Project 1 Description</p>
            </a>
          </div>
          <div>
            <img src="/works/techBlog.png" alt="techBlog" />
            <a href="https://efunk-tech-blog-f66ef9d4dfae.herokuapp.com/">
              <p>Project 1 Description</p>
            </a>
          </div>
          <div>
            <img src="/works/weatherApp.png" alt="weatherApp" />
            <a href="https://4funke.github.io/weather-dashboard-funk/">
              <p>Project 1 Description</p>
            </a>
          </div>
          <div>
            <img src="/works/workDayScheduler.png" alt="workDayScheduler" />
            <a href="https://4funke.github.io/funkE-Scheduler-Challenge/">
              <p>Project 1 Description</p>
            </a>
          </div>
          {/* https://braymurph.github.io/Dict-Pic/ */}
        </Carousel>
      </div>
    </div>
  );
}

export default Works;