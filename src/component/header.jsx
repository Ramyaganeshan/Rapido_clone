import React, { useState } from "react";
import Logo from "../assets/NewLogo.svg";
import MenuIcon from "../assets/header_icons/hamburger.webp";
import CloseIcon from "../assets/header_icons/close.svg";
import "../styles/header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={Logo} alt="logo" />
      </div>

      <div className="download-and-menu">
        <div className="download-link">Download App</div>
        <div className="menu-icon" onClick={() => setIsMenuOpen(true)}>
          <img src={MenuIcon} alt="menu icon" />
        </div>
      </div>

      <div className="header-nav">
        <label>About Us</label>
        <label>Safety</label>
        <label>Blog</label>
        <label>Contact Us</label>
      </div>

      {isMenuOpen && (
        <div className="mobile-fullscreen-nav">
          <div className="mobile-menu-header">
            <img src={Logo} alt="logo" />
            <div className="close-icon" onClick={() => setIsMenuOpen(false)}>
              <img src={CloseIcon} alt="close" />
            </div>
          </div>
          <div className="mobile-nav-links">
            <label>About Us</label>
            <label>Safety</label>
            <label>Blog</label>
            <label>Contact Us</label>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
