import React from 'react';
import '../styles/AboutMe.css'; // Import your CSS for styling

function AboutMe() {
  return (
    <div className="about-me-container">
      <h2 className='aboutTitle'>About</h2>
      <div className="about-content">
        <p className='aboutDescription'>
        I am an artist and teacher, and developing my skills in coding. 
        I am a BFA/MS graduate of Pratt Institute, School of Art and Design 
        located in Brooklyn, New York. For 6 years my field of study has been 
        in Art and Design Education, however, I hope to grow my abilities in 
        coding where I can apply my knowledge of design and education to contribute 
        to the field of web development. I currently teach at Charlotte Lab Lower Schools.  
        I create personal art using Printmaking, Digital Photography, Performing Arts, 
        Photography, Jewelry/Metal, Drawing, and Glass.
        </p>
        <div className="profile-image">
          <img src="/images/selfie.png" alt="Your Name" />
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