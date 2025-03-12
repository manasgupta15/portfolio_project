import React from "react";
import "./Footer.css";
// import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";
import { FaUserAstronaut } from "react-icons/fa"; // Import FaUserTie

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          {/* Portfolio Icon Instead of Image Logo */}
          <FaUserAstronaut className="portfolio-icon" />
          <p>
            I am a Full-Stack Developer from India with expertise in MERN, AI
            integration, and Web3, building scalable solutions like Edemy LMS
            and BinkeyIT. 🚀
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          &copy; 2025 Manas Gupta. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
