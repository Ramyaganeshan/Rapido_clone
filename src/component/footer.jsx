import React from "react";
import "../styles/footer.css";
import Logo from "../assets/NewLogo.svg";
import XIcon from "../assets/footer_icons/twitter.svg";
import YouTubeIcon from "../assets/footer_icons/youtube.svg";
import InstagramIcon from "../assets/footer_icons/insta.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <hr className="footer-divider" />
      <div className="footer-icons">
        <img src={XIcon} alt="X icon" />
        <img src={YouTubeIcon} alt="YouTube icon" />
        <img src={InstagramIcon} alt="Instagram icon" />
      </div>
      <hr className="footer-divider" />

      <div className="footer-main">
        {/* Column 1 - Logo + 7 links */}
        <div className="footer-left">
          <div className="footer-logo">
            <img src={Logo} alt="Rapido logo" />
          </div>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Safety</li>
            <li>Blog</li>
            <li>Press</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="right-margin">
          <div className="footer-right">
            <ul>
              <li>Customer Terms - Bike Taxi</li>
              <li>Customer Terms - Cabs and Auto</li>
              <li>Corporate Affairs</li>
              <li>Captain Terms - Bike Taxi</li>
              <li>Captain Terms - Cabs and Auto</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="footer-divider" />

      <div className="footer-bottom">
        © 2025 Rapido Transportation. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
