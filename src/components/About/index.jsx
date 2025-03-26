import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Chart } from 'primereact/chart';
import { FaGraduationCap, FaCode, FaTools, FaDownload } from 'react-icons/fa';
import ContentLoader from 'react-content-loader';
import './about.css';

function About() {
  const [isLoading, setIsLoading] = React.useState(true);

  // Education items array
  const educationItems = [
    {
      institution: 'Nxtwave Disruptive Technologies',
      details: 'Industry Ready Certification in Full-stack Development (Jun 2023 - Ongoing)'
    },
    {
      institution: 'Anubose Institute of Technology',
      details: 'MBA in Human Resource & Finance (7.5%) (2022 - Ongoing)'
    },
    {
      institution: 'Priyadarshini Degree College',
      details: 'B Com in Commerce (7.65 CGPA) (2019 - 2022)'
    },
    {
      institution: 'Krishnaveni Junior College',
      details: 'Intermediate_CEC (78.8%) (2017 - 2019)'
    },
    {
      institution: 'Triveni School',
      details: 'Secondary School Certificate (7.8%) (2016 - 2017)'
    }
  ];

  // Chart data
  const data = {
    labels: ['HTML', 'CSS', 'JAVASCRIPT', 'PYTHON', 'SQL', 'NODEJS', 'REACTJS', "MongoDB"],
    datasets: [
      {
        label: 'Proficiency (%)',
        data: [95, 90, 80, 40, 60, 70, 85, 70],
        backgroundColor: Array(8).fill('#00bcd4'),
        borderColor: Array(8).fill('#0056b3'),
        borderWidth: 1
      }
    ]
  };

  // Chart options
  const options = {
    indexAxis: 'x',
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        max: 100,
        ticks: { color: '#d1d1d1' },
        grid: { color: 'rgba(255, 255, 255, 0.2)' }
      },
      y: {
        ticks: { color: '#d1d1d1' },
        grid: { display: false }
      }
    },
    plugins: {
      legend: {
        labels: { color: '#d1d1d1' }
      }
    }
  };

  // Simulate loading delay
  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      <div className="about-container">
      <section className="about-me animate-slide-up">
          <h1 className="about-title">
            <span className="gradient-text">Full-Stack Developer</span>
          </h1>
          <p className="about-description">
          I'm a Full-Stack Developer with a strong foundation in frontend and backend technologies. I recently completed my Industry Ready Certification in Full-Stack Development from Nxtwave Disruptive Technologies, where I honed my skills in React, Node.js, and Python. With a background in commerce and an MBA in Human Resources & Finance, I bring a unique blend of technical and business acumen to every project. I'm always eager to learn new technologies and tackle challenging problems. When I'm not coding, you can find me exploring the latest trends in tech or working on personal projects to expand my skill set.
          </p>
        </section>

        <section className="education animate-fade-in">
          <h2 className="section-title">
            <FaGraduationCap className="icon" /> Education
          </h2>
          <ul className="education-list">
            {educationItems.map((item, index) => (
              <li className="education-item" key={index}>
                <div className="education-card">
                  <strong>{item.institution}</strong> - {item.details}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="skills animate-fade-in">
          <h2 className="section-title">
            <FaCode className="icon" /> Technical Skills
          </h2>
          <div className="chart-container">
            {isLoading ? (
              <ContentLoader 
                speed={2}
                width="100%"
                height={300}
                viewBox="0 0 400 300"
                backgroundColor="#2d2d2d"
                foregroundColor="#404040"
              >
                <rect x="0" y="0" rx="3" ry="3" width="400" height="300" />
              </ContentLoader>
            ) : (
              <Chart type="bar" data={data} options={options} />
            )}
          </div>
        </section>

        <section className="tools animate-fade-in">
          <h2 className="section-title">
            <FaTools className="icon" /> Tools & Software
          </h2>
          <div className="tools-grid">
            {['VSCode', 'ChatGPT', 'Deepseek', 'Chrome', 'Postman',].map((tool, index) => (
              <div className="tool-card" key={index}>
                {tool}
              </div>
            ))}
          </div>
        </section>

        <section className="download animate-fade-in">
          <a href="/path-to-your-resume.pdf" download="Tarun_Adaraboina_Resume">
            <button className="download-btn">
              <FaDownload className="download-icon" />
              Download Resume
            </button>
          </a>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default About;

