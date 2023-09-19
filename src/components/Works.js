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
          <div className="slide">
            <img src='/works/codeQuiz.png' alt="codeQuiz" />
            <a href="https://4funke.github.io/quiz-for-coders-funk/">
              <p>Code Quiz</p>
            </a>
            <div className="project-description">
              <p>
              This website is for beginner coders looking to test their knowledge. The quiz consists of 5 simple questions. The quiz is timed and will test you knowledge against the time and questions answered. I am motivated to help fellow coders quiz themselves for practice. I learned how to use javascript and used prior knowledge of css and html to create the web page.
              </p>
            </div>
          </div>
          <div className="slide">
            <img src="/works/eCommerceV.png" alt="eCommerceV" />
            <a href="https://drive.google.com/file/d/1-aT0zIgB_8ntHSX02-b2sLZ8LYU-dqJY/view">
              <p>Project 1 Description</p>
            </a>
            <div className="project-description">
              <p>
                I embarked on the journey of building this E-commerce application with the objective of crafting a robust set of routes tailored for internet retailers. The motivation behind this project was to empower retail owners with a comprehensive platform that streamlines inventory management, thus enhancing the overall retail experience.
                Throughout the development process, I tackled the challenge of creating an E-commerce solution that seamlessly integrates essential functionalities. This encompassed creating well-defined routes that facilitate effortless operations such as retrieving, adding, updating, and removing items from the inventory.
                By implementing this project, I acquired valuable skills in constructing the backbone of a backend architecture. This involved mastering the art of crafting RESTful APIs and leveraging HTTP methods like GET, POST, PUT, and DELETE. As a result, I gained proficiency in data manipulation and honed my ability to provide effective solutions to real-world problems faced by retailers.
                This journey not only enabled me to build a functional E-commerce platform but also equipped me with the expertise to create scalable and adaptable backend systems. Through this experience, I've deepened my understanding of database interactions, request handling, and the importance of designing intuitive user experiences for retail professionals.
                In summary, this project stands as a testament to my dedication to software development and showcases my ability to architect comprehensive solutions that cater to the unique needs of internet retailers. It's been an incredible learning experience that has enriched my skill set and solidified my passion for creating impactful applications.
              </p>
            </div>
          </div>
          <div className="slide">
            <img src="/works/employeeDbV.png" alt="employeeDbV" />
            <a href="https://drive.google.com/file/d/1yrz7WXBZnYWIXs9F_yrXrT-nXjv08tSp/view">
              <p>Project 1 Description</p>
            </a>
            <div className="project-description">
              <p>
                Full Project 1 Description. This is a long description that
                will be scrollable if it exceeds the fixed height of the
                description box.
              </p>
            </div>
          </div>
          <div className="slide">
            <img src="/works/horiseonRefactor.png" alt="horiseonRefactor" />
            <a href="http://4funke.github.io/challenge1/">
              <p>Horiseon, Refactored App</p>
            </a>
            <div className="project-description">
              <p>
              The Horiseon marketing agency needed to refactor its website. 
              This means I needed to improve the code without changing the website to 
              make it more accessible. Making the code more accessible ensures that all 
              users can use assistive technology or interact with the page more easily. 
              I worked to make the starter code have semantic HTML and CSS. Organizing 
              the code to be more accessible use.
              </p>
            </div>
          </div>
          <div className="slide">
            <img src="/works/logoGeneratorV.png" alt="logoGeneratorV" />
            <a href="https://drive.google.com/file/d/1xMz8emwvcY_iMejW15LJNOEgtDO1w4QV/view">
              <p>Project 1 Description</p>
            </a>
            <div className="project-description">
              <p>
                Full Project 1 Description. This is a long description that
                will be scrollable if it exceeds the fixed height of the
                description box.
              </p>
            </div>
          </div>
          <div className="slide">
            <img src="/works/notes.png" alt="notes" />
            <a href="https://peaceful-sea-55951-74e9b2c9bca6.herokuapp.com/">
              <p>Project 1 Description</p>
            </a>
            <div className="project-description">
              <p>
                Full Project 1 Description. This is a long description that
                will be scrollable if it exceeds the fixed height of the
                description box.
              </p>
            </div>
          </div>
          <div className="slide">
            <img src="/works/passwordGenerator.png" alt="passwordGenerator" />
            <a href="https://4funke.github.io/password-generator-challenge-funk/">
              <p>Project 1 Description</p>
            </a>
            <div className="project-description">
              <p>
                Full Project 1 Description. This is a long description that
                will be scrollable if it exceeds the fixed height of the
                description box.
              </p>
            </div>
          </div>
          <div className="slide">
            <img src="/works/portfolio1.png" alt="portfolio1" />
            <a href="https://4funke.github.io/funk-code-protfolio/">
              <p>Project 1 Description</p>
            </a>
            <div className="project-description">
              <p>
                Full Project 1 Description. This is a long description that
                will be scrollable if it exceeds the fixed height of the
                description box.
              </p>
            </div>
          </div>
          <div className="slide">
            <img src="/works/READMEGeneratorV.png" alt="READMEGeneratorV" />
            <a href="https://drive.google.com/file/d/1DSXcjSqRCzwha_lXL1ij8fyZMRQ6od0U/view">
              <p>Project 1 Description</p>
            </a>
            <div className="project-description">
              <p>
                Full Project 1 Description. This is a long description that
                will be scrollable if it exceeds the fixed height of the
                description box.
              </p>
            </div>
          </div>
          <div className="slide">
            <img src="/works/studentMark.png" alt="🍎studentMark" />
              <a href="https://shielded-everglades-30738-44134476de15.herokuapp.com/">
                <p>Project 1 Description</p>
              </a>
              <div className="project-description">
              <p>
                Full Project 1 Description. This is a long description that
                will be scrollable if it exceeds the fixed height of the
                description box.
              </p>
            </div>
          </div>
          <div className="slide">
            <img src="/works/studyGuide.png" alt="studyGuide" />
            <a href="https://4funke.github.io/prework-study-guide/">
              <p>Project 1 Description</p>
            </a>
            <div className="project-description">
              <p>
                Full Project 1 Description. This is a long description that
                will be scrollable if it exceeds the fixed height of the
                description box.
              </p>
            </div>
          </div>
          <div className="slide">
            <img src="/works/techBlog.png" alt="techBlog" />
            <a href="https://efunk-tech-blog-f66ef9d4dfae.herokuapp.com/">
              <p>Project 1 Description</p>
            </a>
            <div className="project-description">
              <p>
                Full Project 1 Description. This is a long description that
                will be scrollable if it exceeds the fixed height of the
                description box.
              </p>
            </div>
          </div>
          <div className="slide">
            <img src="/works/weatherApp.png" alt="weatherApp" />
            <a href="https://4funke.github.io/weather-dashboard-funk/">
              <p>Project 1 Description</p>
            </a>
            <div className="project-description">
              <p>
                Full Project 1 Description. This is a long description that
                will be scrollable if it exceeds the fixed height of the
                description box.
              </p>
            </div>
          </div>
          <div className="slide">
            <img src="/works/workDayScheduler.png" alt="workDayScheduler" />
            <a href="https://4funke.github.io/funkE-Scheduler-Challenge/">
              <p>Project 1 Description</p>
            </a>
            <div className="project-description">
              <p>
                Full Project 1 Description. This is a long description that
                will be scrollable if it exceeds the fixed height of the
                description box.
              </p>
            </div>
          </div>
          <div className="slide">
            <img src="/works/dictPic.png" alt="Dict-Pic" />
            <a href="https://braymurph.github.io/Dict-Pic/">
              <p>Project 1 Description</p>
            </a>
            <div className="project-description">
              <p>
                Full Project 1 Description. This is a long description that
                will be scrollable if it exceeds the fixed height of the
                description box.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Works;