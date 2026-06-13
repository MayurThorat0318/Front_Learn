import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import './Header.css';

export default function Header() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Helper to determine if a route is active
  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header className="site-header">
      <div className="container header-container">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo" onClick={() => setMobileMenuOpen(false)}>
          <span className="logo-icon">
            <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect width="32" height="32" rx="8" fill="url(#logoGrad)"/>
              {/* Book pages */}
              <rect x="7" y="9" width="8" height="14" rx="1" fill="white" opacity="0.9"/>
              <rect x="17" y="9" width="8" height="14" rx="1" fill="white" opacity="0.6"/>
              {/* Spine */}
              <rect x="15" y="8" width="2" height="16" rx="1" fill="white"/>
              {/* Code bracket on front */}
              <text x="8.5" y="19" fontSize="7" fontWeight="bold" fill="url(#logoGrad)" fontFamily="monospace">&lt;/&gt;</text>
              <defs>
                <linearGradient id="logoGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#6366f1"/>
                  <stop offset="100%" stopColor="#8b5cf6"/>
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="logo-text">Front<span className="accent-text">Learn</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
          <Link to="/html" className={`nav-link ${isActive('/html') ? 'active' : ''}`}>HTML</Link>
          <Link to="/css" className={`nav-link ${isActive('/css') ? 'active' : ''}`}>CSS</Link>
          <Link to="/roadmap" className={`nav-link ${isActive('/roadmap') ? 'active' : ''}`}>Roadmap</Link>
          <Link to="/learn" className={`nav-link ${isActive('/learn') ? 'active' : ''}`}>Learn</Link>
          <Link to="/prep" className={`nav-link ${isActive('/prep') ? 'active' : ''}`}>Interview Prep</Link>
          <Link to="/blog" className={`nav-link ${isActive('/blog') ? 'active' : ''}`}>Blog</Link>
        </nav>

        {/* Actions (Theme toggle, Mobile menu button) */}
        <div className="header-actions">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
          >
            {isDarkMode ? (
              // Sun Icon for Light mode trigger
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-sun">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
            ) : (
              // Moon Icon for Dark mode trigger
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-moon">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
            )}
          </button>

          {/* Hamburger Menu Toggle (Mobile) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-overlay" onClick={() => setMobileMenuOpen(false)}>
          <nav className="mobile-nav" onClick={(e) => e.stopPropagation()}>
            <Link to="/" className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/html" className={`mobile-nav-link ${isActive('/html') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>HTML Concepts</Link>
            <Link to="/css" className={`mobile-nav-link ${isActive('/css') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>CSS Concepts</Link>
            <Link to="/roadmap" className={`mobile-nav-link ${isActive('/roadmap') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Roadmap</Link>
            <Link to="/learn" className={`mobile-nav-link ${isActive('/learn') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Learning Hub</Link>
            <Link to="/prep" className={`mobile-nav-link ${isActive('/prep') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Interview Prep</Link>
            <Link to="/blog" className={`mobile-nav-link ${isActive('/blog') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Blog</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
