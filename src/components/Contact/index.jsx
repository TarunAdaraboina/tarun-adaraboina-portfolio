import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import './contact.css';

function Contact() {
  return (
    <>
      <Header />
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-image">
            <img 
              src="https://res.cloudinary.com/dvtvfpqeo/image/upload/v1740201731/contact-us-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--call-logo-customer-service-center-digital-marketing-pack-business-illustrations-4379019_nugrrl.webp" 
              alt="Contact Illustration"
            />
          </div>
          
          <div className="contact-info">
            <h1 className='contact-title'>Let's Connect!</h1>
            <p className="contact-description">
              I'm always open to new opportunities and collaborations. Feel free to reach out to me via email or LinkedIn, or check out my GitHub for more projects.
            </p>

            <div className='contact-details'>
              <div className="contact-item">
                <FaPhoneAlt className="contact-icon" />
                <a href="tel:+919059124937">+91 9059124937</a>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <a href="mailto:adaraboinatarun@gmail.com">adaraboinatarun@gmail.com</a>
              </div>
              <div className="contact-item">
                <FaLinkedin className="contact-icon" />
                <a href="https://www.linkedin.com/in/tarunadaraboina" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/tarunadaraboina
                </a>
              </div>
              <div className="contact-item">
                <FaGithub className="contact-icon" />
                <a href="https://github.com/TarunAdaraboina" target="_blank" rel="noopener noreferrer">
                  github.com/TarunAdaraboina
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;