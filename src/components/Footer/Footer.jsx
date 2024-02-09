import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>
            Empowering youth and women to navigate the world of finance with
            confidence and clarity.
          </p>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Info</h3>
          <p>123 Street Name, City, Country</p>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 789</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
