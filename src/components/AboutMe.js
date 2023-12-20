import React from 'react';
import '../styles/AboutMe.css'; // Import your CSS for styling

function AboutMe() {
  return (
    <div className="about-me-container">
      <h2 className='aboutTitle'>
        Introduction
      </h2>
      <div className="about-content">
        <div className="left-content">
          <div className="profile-image"></div>
        </div>
        <div className="right-content">
          <p className='aboutDescription'>
          As a Full Stack Developer, I've embarked on a journey into the world of coding after earning my BFA/MS degree at Pratt Institute, School of Art and Design, with a background in Art and Design Education. While my educational experience equipped me with valuable teaching, mentoring, and instructional skills, I've now channeled my passion for learning and facilitating engagement into the dynamic field of Full Stack Development. I've acquired the necessary skills to craft web applications, mobile apps, and websites using the MERN Stack (MongoDB, Express, React, Node.js).
            </p>
        </div>
      </div>
      <div className="bottom-bar">
        <p>I am a Jack of all trades!</p>
        <a href="https://instagram.com/funk.e_art"><button className='artButton'>Art</button></a>
        <a href="https://www.artsonia.com/schools/school.asp?id=154682"><button className='teachButton'>Teaching</button></a>
      </div>
    </div>
  );
}

export default AboutMe;
