import React, { useState, useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaDatabase } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import ContentLoader from 'react-content-loader';
import Header from '../Header';
import Footer from '../Footer';
import './blog.css';


const blogPosts = [
  {
    title: "HTML(Hyper Text Markup Language)", 
    date: "June 2023",
    excerpt: "HTML is the foundation of web development. In this post, I walk you through the basics of HTML tags, structure, and how to build simple web pages.",
    icon: <FaHtml5 />,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
  },
  {
    title: "CSS(cascading Style Sheet)", 
    date: "July 2023",
    excerpt: "CSS plays a crucial role in designing beautiful and responsive websites. This post covers the basics of CSS, including selectors, properties, and layout techniques.",
    icon: <FaCss3Alt />,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  },
  {
    title: "Understanding SQL", 
    date: "August 2023",
    excerpt: "SQL databases are the backbone of many applications. In this post, I explain the basics of SQL, including queries, tables, and relational data.",
    icon: <FaDatabase />,
    link: "https://www.w3schools.com/sql/"
  },
  {
    title: "My Journey with JavaScript", 
    date: "September 2023",
    excerpt: "JavaScript has been a fascinating language to learn. From DOM manipulation to asynchronous programming, it's been an exciting journey.",
    icon: <FaJs />,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    title: "Building a REST API with Node.js", 
    date: "March 2024",
    excerpt: "Node.js allows you to create fast and scalable backend services. In this post, I walk through the process of building a REST API using Node.js and Express.",
    icon: <FaNodeJs />,
    link: "https://nodejs.org/en/docs/guides"
  },
  {
    title: "Understanding React Lifecycle",
    date: "April 2024",
    excerpt: "React's lifecycle methods provide a powerful way to control component behavior. In this post, I dive deep into the different phases of a React component.",
    icon: <FaReact />,
    link: "https://react.dev/learn"
  },
  {
    title: "The MERN Stack", 
    date: "May 2024",
    excerpt: "In this blog post, I explore the MERN stack, its components, and how they work together to build robust full-stack applications.",
    icon: <SiMongodb />,
    link: "https://www.mongodb.com/mern-stack"
  }
];


const BlogLoader = () => (
  <ContentLoader
    speed={2}
    width="100%"
    height={180}
    viewBox="0 0 400 180"
    backgroundColor="#d0e1ff" 
    foregroundColor="#a7c4ff"
  >
    {/* Icon Placeholder */}
    <circle cx="30" cy="30" r="20" />
    {/* Title Placeholder */}
    <rect x="60" y="15" rx="4" ry="4" width="70%" height="20" />
    {/* Date Placeholder */}
    <rect x="60" y="40" rx="3" ry="3" width="70%" height="15" />
    
    {/* Excerpt Placeholders */}
    <rect x="0" y="70" rx="3" ry="3" width="70%" height="15" />
    <rect x="0" y="90" rx="3" ry="3" width="360" height="15" />
    <rect x="0" y="110" rx="3" ry="3" width="320" height="15" />
    
    {/* "Read More" Button Placeholder */}
    <rect x="0" y="140" rx="4" ry="4" width="120" height="30" />
  </ContentLoader>
);


const Blog = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      <div className="blog-section">
        {loading ? (
          <div className="blog-loader-container">
            {[...Array(5)].map((_, i) => <BlogLoader key={i} />)}
          </div>
        ) : (
          <div className="timeline">
            {blogPosts.map((post, index) => (
              <article className="timeline-item" key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="blog-header">
                    <div className="blog-icon">{post.icon}</div>
                    <div>
                      <h3 className="blog-title">{post.title}</h3>
                      <p className="blog-date">{post.date}</p>
                    </div>
                  </div>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <a 
                    href={post.link} 
                    className="blog-read-more"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Read more
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Blog;