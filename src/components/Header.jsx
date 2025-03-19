import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/TeaMaxLogo.avif";
import logo1 from "../assets/teamax.jpg";
import logonew from "../assets/logonew1.PNG";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services-section");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const scrollToHome = () => {
    const homeSection = document.getElementById("Slider-Section");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="header">
      <div className="logo">
      <img src={logonew} alt="Logo" id="logonew" className="logo" />
      <img src={logo1} alt="Logo" id ="logo-1" className="logo" />
      </div>

      {/* Hamburger Menu Icon (for mobile) */}
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      {/* Navigation Links */}
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        {/* <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li> */}
        <li><button onClick={scrollToHome} className="nav-btn">Home</button></li>
        <li><button onClick={scrollToAbout} className="nav-btn">About</button></li>
        {/* <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li> */}
        <li><button onClick={scrollToServices} className="nav-btn">Our Services</button></li>
        {/* <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li> */}
        
        <li><button onClick={scrollToContact} className="nav-btn">Contact</button></li>
      </ul>
    </nav>
  );
};

export default Header;