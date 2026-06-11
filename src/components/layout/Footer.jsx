import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!email) {
      setError('Email is required');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please provide a valid email address');
      return;
    }

    // Success state
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Brand and Description Info */}
        <div className="footer-info">
          <Link to="/" className="footer-logo">
            <span className="logo-icon">⚡</span>
            <span className="logo-text">Frontend<span className="accent-text">Ref</span></span>
          </Link>
          <p className="footer-desc">
            A quick-reference site for HTML and CSS concepts, with brief explanations and live interactive demos for each topic.
          </p>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" aria-label="Discord">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-links">
          <h3>Explore</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/html">HTML Concepts</Link></li>
            <li><Link to="/css">CSS Concepts</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>

        {/* Newsletter Registration Column */}
        <div className="footer-newsletter">
          <h3>Stay Updated</h3>
          <p>Subscribe to receive weekly frontend tips and concept breakdowns directly in your inbox.</p>
          {subscribed ? (
            <div className="newsletter-success">
              <span className="success-icon">✓</span> Thanks for subscribing! Check your email soon.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="newsletter-form" noValidate>
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`newsletter-input ${error ? 'input-error' : ''}`}
                  aria-label="Email address for newsletter"
                />
                <button type="submit" className="newsletter-btn">Subscribe</button>
              </div>
              {error && <span className="newsletter-error-msg">{error}</span>}
            </form>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container flex-between footer-bottom-container">
          <p className="copyright-text">&copy; {new Date().getFullYear()} FrontendRef. Built for reference.</p>
          <p className="design-credit">Designed with passion 💻</p>
        </div>
      </div>
    </footer>
  );
}
