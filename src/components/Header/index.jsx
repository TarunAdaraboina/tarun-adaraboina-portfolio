import React, { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import {  FaBars, FaTimes } from "react-icons/fa";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar" aria-label="Main Navigation">
      <Link to="/" className="logo-link" aria-label="Home">
        <h1 className="tarun-icon">TA</h1>
      </Link>

      {/* Mobile Hamburger Icon */}
      <div className="mobile-menu-icon" onClick={toggleMenu} aria-label="Menu">
        {menuOpen ? <FaTimes className="header-icon" /> : <FaBars className="header-icon" />}
      </div>

      {/* Desktop Navigation */}
      <ul className="nav-list-desktop">
        <li className="nav-item">
          <Link to="/" className="link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="link">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/blog" className="link">Blog</Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" className="link">Projects</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="link">Contact</Link>
        </li>
      </ul>

      {/* Mobile Navigation Dropdown */}
      {menuOpen && (
        <ul className="nav-list-mobile">
          <li className="nav-item" onClick={closeMenu}>
            <Link to="/" className="link">Home</Link>
          </li>
          <li className="nav-item" onClick={closeMenu}>
            <Link to="/about" className="link">About</Link>
          </li>
          <li className="nav-item" onClick={closeMenu}>
            <Link to="/projects" className="link">Projects</Link>
          </li>
          <li className="nav-item" onClick={closeMenu}>
            <Link to="/blog" className="link">Blog</Link>
          </li>
          <li className="nav-item" onClick={closeMenu}>
            <Link to="/contact" className="link">Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Header;


