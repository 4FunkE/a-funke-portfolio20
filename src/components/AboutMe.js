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
            👋 Former Art and Design Educator 🎨 turned Full Stack Developer 🚀 | Passionate about hiking, weightlifting, and landscaping 🌄 | Open to collaborations and constantly learning 🤝

            I am a multifaceted professional, combining my background in Art and Design Education with a burgeoning passion for coding. A BFA/MS graduate from Pratt Institute, School of Art and Design in Brooklyn, New York, I dedicated six years to the study of Art and Design Education.

            Currently, I'm an educator at Charlotte Lab Lower Schools, where I have worn many hats – teacher, mentor, and instructor – guiding students across diverse disciplines. In addition to my role in education, I express myself through various artistic mediums, including Printmaking, Digital Photography, Performing Arts, Jewelry/Metalwork, Drawing, and Glass.

            Recently, I embarked on a transformative journey into the world of coding, transitioning to Full Stack Development. My goal is to leverage my deep understanding of design and education to contribute to the field of web development. Equipped with skills in the MERN Stack (MongoDB, Express, React, Node.js), I'm crafting user-friendly, innovative solutions, and embracing the power of interdisciplinary learning.

            My commitment to learning and excellence remains unwavering as I bridge my educational background with coding expertise. I see each experience as an opportunity to explore, create, and grow, both as a developer and as an educator, drawing inspiration from my students, colleagues, and the ever-evolving digital landscape.
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
