import React from "react";
import {Link} from "react-router-dom";
import "../styles/Footer.css"

const Contact = () => {
    return (
    <footer id="contact-section" className="contact-footer">
      <div className="footer-container">
        {/* About Section */}
        {/* <div className="footer-section">
          <h3>About Us</h3>
          <p>Welcome to our café, where we serve the best Tea in town!</p>
        </div> */}

        {/* Quick Links */}
        {/* <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div> */}

        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: jijo@tmcafe.com</p>
          <p>Phone: +91 9597114497</p>
          <p>Location: ARRS Complex, Salem Road - Namakkal City</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Tea Max Café - Namakkal. All Rights Reserved.</p>
      </div>
    </footer>
    );
};

export default Contact;