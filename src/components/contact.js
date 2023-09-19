import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import '../styles/Contact.css'; // Import your CSS for styling

function Contact() {
  return (
    <div className="contact-container">
      {/* Background Image */}
      <div className="background-imageC"></div>

      <div className="contactContent">
        <div className="contact-header">
          <h2>Let's Connect</h2>
        </div>

        <div className="social-media-icons">
          {/* Social Media Links */}
          <a href="https://linkedin.com/in/your_linkedin_profile">
            <FaLinkedin size={32} />
          </a>
          <a href="https://instagram.com/your_instagram_profile">
            <FaInstagram size={32} />
          </a>
          <a href="https://github.com/your_github_profile">
            <FaGithub size={32} />
          </a>
        </div>

        {/* Transparent Container for Contact Form */}
        <div className="contact-form-container">
          <div className="contact-form">
            <h3>Contact Me</h3>
            <form>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>

        {/* Resume Circle Button */}
        <div className="download-resume">
          <a href="/path/to/resume.pdf" download className="resume-button">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
