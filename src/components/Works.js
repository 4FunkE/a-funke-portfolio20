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
            <img src='/a-funke-portfolio20/works/codeQuiz.png' alt="codeQuiz" />
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
            <img src="/a-funke-portfolio20/works/eCommerceV.png" alt="eCommerceV" />
            <a href="https://drive.google.com/file/d/1-aT0zIgB_8ntHSX02-b2sLZ8LYU-dqJY/view">
              <p>E-Commerce Video</p>
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
            <img src="/a-funke-portfolio20/works/employeeDbV.png" alt="employeeDbV" />
            <a href="https://drive.google.com/file/d/1yrz7WXBZnYWIXs9F_yrXrT-nXjv08tSp/view">
              <p>Employee Database Video</p>
            </a>
            <div className="project-description">
              <p>
              Welcome to Funk.co, where we prioritize the organization and cleanliness of our employee database. Our project revolves around the utilization of SQL, enabling seamless updates to our employee database. This application streamlines company operations, ensuring that crucial databases are effortlessly accessible to both employees and managers.
              Key Features include: Simplified Employee Database: Effortlessly manage employee records through our user-friendly application. Smooth Company Operations: Our application optimizes workflows, promoting efficiency and reducing potential complications. Seamless Accessibility: Vital databases are at your fingertips, enhancing accessibility for both employees and managers.
              Through this project, I gained valuable insights into connecting the server.js with schema files, enabling seamless access and interactions with databases. Our commitment to an organized and efficient employee database remains unwavering.
              Thank you for choosing Funk.co for your employee database needs. We look forward to delivering enhanced organization and efficiency to your company's processes.
              </p>
            </div>
          </div>
          <div className="slide">
            <img src="/a-funke-portfolio20/works/horiseonRefactor.png" alt="horiseonRefactor" />
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
            <img src="/a-funke-portfolio20/works/logoGeneratorV.png" alt="logoGeneratorV" />
            <a href="https://drive.google.com/file/d/1xMz8emwvcY_iMejW15LJNOEgtDO1w4QV/view">
              <p>Logo Generator Video</p>
            </a>
            <div className="project-description">
              <p>
              I am motivated as a designer to create this application to make it easier for users to create a base idea of a design logo for them to use. They can play with characters colors and shapes to see how their base design will look. I learned how to create tests for my code to check its ability to execute the code. I also used how to use my intergrated terminal to install useful modules to my package JSON.
              </p>
            </div>
          </div>
          <div className="slide">
            <img src="/a-funke-portfolio20/works/notes.png" alt="notes" />
            <a href="https://peaceful-sea-55951-74e9b2c9bca6.herokuapp.com/">
              <p>Note Taker</p>
            </a>
            <div className="project-description">
              <p>
              I was motivated to create this project to help myself and others stay organized in their daily lives. In Note-taker a user can write down ideas and thoughts they need to remember through out the day. I learned how to implement and use express to create API routes. I also learned how to deploy using Heroku. 
              </p>
            </div>
          </div>
          <div className="slide">
            <img src="/a-funke-portfolio20/works/passwordGenerator.png" alt="passwordGenerator" />
            <a href="https://4funke.github.io/password-generator-challenge-funk/">
              <p>Password Generator</p>
            </a>
            <div className="project-description">
              <p>
              The purpose of this webpage is to assist user in creating a password generated by the computer. The user can choose parameters they would like in their password and the computer will generate a unique password that follows those parameters. This can help users enhance their security throughout their life by recieving a uniques output each time. I was able tp deepen my learning on for loops and functions in JavaScript. I learned I have more skills to gain and will need more practice with JavaScript. I have a hard time over thinking which of my variables connect in what sequcial order.
              </p>
            </div>
          </div>
          <div className="slide">
            <img src="/a-funke-portfolio20/works/portfolio1.png" alt="portfolio1" />
            <a href="https://4funke.github.io/funk-code-protfolio/">
              <p>Portfolio Website</p>
            </a>
            <div className="project-description">
              <p>
              This website is used to introduce the skills and background of a beginner web developer. Its purpose is to be an online portfolio. This site can be used to see information about Emily Funk, examples of her past work, and coding abilities. The webpage also makes it possible for users to get in contact with her. Through creating this application I was able to better build my skills in web development.
              </p>
            </div>
          </div>
          <div className="slide">
            <img src="/a-funke-portfolio20/works/READMEGeneratorV.png" alt="READMEGeneratorV" />
            <a href="https://drive.google.com/file/d/1DSXcjSqRCzwha_lXL1ij8fyZMRQ6od0U/view">
              <p>README Generator Video</p>
            </a>
            <div className="project-description">
              <p>
              I created this project to make it easier for developers to create a professional README for their finished Repos. The application lets users answer important questions about their repos and then will generate a professionally formatted README to use. It solves the time-consuming effort of creating a README from scratch. I learned how to use node.js to use the integrated terminal and inquirer to create new files.
              </p>
            </div>
          </div>
          <div className="slide">
            <img src="/a-funke-portfolio20/works/studentMark.png" alt="🍎studentMark" />
              <a href="https://shielded-everglades-30738-44134476de15.herokuapp.com/">
                <p>🍎Student Mark</p>
              </a>
              <div className="project-description">
              <p>
                Our application empowers students to rate their teachers' performance, promoting accountability in the school environment. By providing students with a voice, we encourage open communication and continuous improvement for educators. Combining our back-end and front-end skills, we've created a user-friendly webpage. Join us in fostering a transparent and enriching educational experience for all. Together, let's celebrate excellent teaching and work towards a brighter future in education. Welcome to our teacher performance rating platform!
              </p>
            </div>
          </div>
          <div className="slide">
            <img src="/a-funke-portfolio20/works/studyGuide.png" alt="studyGuide" />
            <a href="https://4funke.github.io/prework-study-guide/">
              <p>Study Guide</p>
            </a>
            <div className="project-description">
              <p>
                This webpage was created for boot camp students to learn basic coding skills, set up their devices for class and organize what they have learned into a coherent and usable website. I was able to learn the basics of HTML, CSS, JavaScript, README, and URL.
              </p>
            </div>
          </div>
          <div className="slide">
            <img src="/a-funke-portfolio20/works/techBlog.png" alt="techBlog" />
            <a href="https://efunk-tech-blog-f66ef9d4dfae.herokuapp.com/">
              <p>A Tech Blog</p>
            </a>
            <div className="project-description">
              <p>
              I was inspired to create this tech blog application to provide a platform for individuals interested in technology. Whether they want to learn, share their insights, or simply stay updated with the tech world, this application offers a space for it all. The primary objective of this project is to foster a sense of community within the tech community. By building this application, I aimed to facilitate the sharing of tech-related thoughts, knowledge, and experiences. It serves as a hub where tech enthusiasts can collaborate, educate, and explore new ideas.
              One of the core issues this project addresses is the fragmentation of tech-related information across various platforms. It consolidates all things tech into one place, making it easier for visitors to fulfill their tech needs. Instead of searching multiple sources, they can find valuable content and discussions here.
              Throughout the development of this project, I gained valuable knowledge and experience in several key areas: Implementing the MVC (Model-View-Controller) architectural pattern to structure the application. Utilizing Handlebars.js as the templating language for rendering dynamic content. Employing Sequelize as the ORM (Object-Relational Mapping) tool for database management. Implementing user authentication and session management using the express-session npm package. Enhancing my understanding of Heroku deployment for hosting web applications.
              By learning and applying these technologies and concepts, I not only built a functional tech blog application but also enhanced my skills as a developer.
              </p>
            </div>
          </div>
          <div className="slide">
            <img src="/a-funke-portfolio20/works/weatherApp.png" alt="weatherApp" />
            <a href="https://4funke.github.io/weather-dashboard-funk/">
              <p>Weather Application</p>
            </a>
            <div className="project-description">
              <p>
              I created this applications to make it easy for users to look up the weather from their devices. Many users ponder what the weather will be on a daily basis, so with this app they can see current and future weather forcasts. I learned how to fetch from APIs and use the data to display for users to interact with. 
              </p>
            </div>
          </div>
          <div className="slide">
            <img src="/a-funke-portfolio20/works/workDayScheduler.png" alt="workDayScheduler" />
            <a href="https://4funke.github.io/funkE-Scheduler-Challenge/">
              <p>Work Day Scheduler</p>
            </a>
            <div className="project-description">
              <p>
              This website is used as a planner during regular buisness hours 9am-5pm. The scheduler can help users list "To Dos" throughout their day. The "To Dos" will stay saved so that users can close the browser then open back up to the tasks they previously entered. I created this to help user become more orgnaized about their task during thies buisness hours. I learned how to implement third party APIs.
              </p>
            </div>
          </div>
          <div className="slide">
            <img src="/a-funke-portfolio20/works/dictPic.png" alt="Dict-Pic" />
            <a href="https://braymurph.github.io/Dict-Pic/">
              <p>Dict Pic</p>
            </a>
            <div className="project-description">
              <p>
              This webpage is an online dictionary application that defines a word the user wants to search for. The webpage also provides animated pictures about the selected word. This webpage gives users a fun and unique experience searching different vocabulary paired with visual representation. This webpage can help people learn new words, strengthen their vocabulary, have visual inspiration, or get a good laugh. It can be used as a more engaging way to learn about words rather than the traditional search or dictionary uses. Our group learned how to use new APIs and implement them properly. We learned the importance of documentation and how it can help us work through problems throughout our process. We learned how to work in a group to successfully deploy a webpage. 
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Works;