import React, { useState, useEffect } from 'react';
import ContentLoader from 'react-content-loader';
import Header from '../Header';
import Footer from '../Footer';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import './home.css';

const Loader = () => (
  <ContentLoader 
    speed={2}
    width="100%"
    height="80vh"
    viewBox="0 0 400 400"
    backgroundColor="#d0e1ff" 
    foregroundColor="#a7c4ff"
  >
    {/* Title Placeholder */}
    <rect x="50" y="50" rx="4" ry="4" width="300" height="20" />

    {/* Bio Placeholder */}
    <rect x="50" y="80" rx="4" ry="4" width="250" height="15" />
    <rect x="50" y="100" rx="4" ry="4" width="280" height="15" />
    
    {/* Profile Image Placeholder */}
    <circle cx="200" cy="180" r="50" />

    {/* Social Icons */}
    <circle cx="140" cy="280" r="16" />
    <circle cx="200" cy="280" r="16" />
    <circle cx="260" cy="280" r="16" />
  </ContentLoader>
);

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [typingText, setTypingText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ['Mern Stack Developer', 'Frontend Developer', 'Backend Developer'];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!loading) {
      const handleTyping = () => {
        const i = loopNum % roles.length;
        const fullText = roles[i];
        
        setTypingText(isDeleting 
          ? fullText.substring(0, typingText.length - 1)
          : fullText.substring(0, typingText.length + 1)
        );
        
        setTypingSpeed(isDeleting ? 30 : 150);

        if (!isDeleting && typingText === fullText) {
          setTimeout(() => setIsDeleting(true), 1000);
        } else if (isDeleting && typingText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setTypingSpeed(500);
        }
      };

      const timer = setTimeout(handleTyping, typingSpeed);
      return () => clearTimeout(timer);
    }
  }, [typingText, isDeleting, loopNum, loading]);

  return (
    <>
      <Header />
      {loading ? (
        <div className="home-container">
          <Loader />
        </div>
      ) : (
        <main className="home-container">
          <div className="home-content">
            <h1 className="title"> <span className='hello'>Hello,</span> I'm Tarun Adaraboina</h1>
            <p className='description'>
              <span className="typing-text">{typingText}</span>
              <span className="typing-cursor">|</span>
            </p>
            <p className="bio">
              Passionate about creating modern, user-friendly web applications that solve real-world problems. 
              Bringing ideas to life through clean code and innovative solutions. 
              Let's build something amazing together!
            </p>

            <div className="social-icons-container">
             
              <div className="social-links-wrapper">
                <a
                  href="https://www.linkedin.com/in/tarunadaraboina/"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={28} />
                </a>
                <a
                  href="https://github.com/TarunAdaraboina"
                  className="social-link"
                  aria-label="GitHub"
                >
                  <FaGithub size={28} />
                </a>
                <a
                  href="https://www.instagram.com/___tarun_a/"
                  className="social-link"
                  aria-label="Instagram"
                >
                  <FaInstagram size={28} />
                </a>
              </div>
            </div>
          </div>

          <div className="profile-image-container">
            <img
              className="profile-image"
              src="https://res.cloudinary.com/dvtvfpqeo/image/upload/v1733406609/blankandwhite_-_Copy_wpeb6c.jpg"
              alt="Developer profile"
            />
          </div>
        </main>
      )}
      <Footer />
    </>
  );
};

export default Home;