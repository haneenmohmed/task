import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-logo">
          <h2>
            <i className="fas fa-briefcase"></i> Jobpilot
          </h2>
          <p>Call now: <span>(319) 555-0115</span></p>
          <p>6391 Elgin St. Celina, Delaware 10299, New York, United States of America</p>
        </div>
        <div className="footer-links">
          <h3>Quick Link</h3>
          <ul>
            <li><p>About</p></li>
            <li><p>Contact</p></li>
            <li><p>Pricing</p></li>
            <li><p>Blog</p></li>
          </ul>
        </div>
        <div className="footer-candidate">
          <h3>Candidate</h3>
          <ul>
            <li><p>Browse Jobs</p></li>
            <li><p>Browse Employers</p></li>
            <li><p>Candidate Dashboard</p></li>
            <li><p>Saved Jobs</p></li>
          </ul>
        </div>
        <div className="footer-employers">
          <h3>Employers</h3>
          <ul>
            <li><p>Post a Job</p></li>
            <li><p>Browse Candidates</p></li>
            <li><p>Employers Dashboard</p></li>
            <li><p>Applications</p></li>
          </ul>
        </div>
        <div className="footer-support">
          <h3>Support</h3>
          <ul>
            <li><p>FAQs</p></li>
            <li><p>Privacy Policy</p></li>
            <li><p>Terms & Conditions</p></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
  <div className="footer-bottom-left">
    <hr className="line"/>
    <p>&copy; 2021 Jobpilot - Job Portal. All rights reserved.</p>
  </div>
  <div className="footer-bottom-right">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
      <i className="fab fa-facebook-f"></i>
    </a>
    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
      <i className="fab fa-youtube"></i>
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
      <i className="fab fa-instagram"></i>
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
      <i className="fab fa-twitter"></i>
    </a>
  </div>
</div>

    </footer>
  );
};

export default Footer;
