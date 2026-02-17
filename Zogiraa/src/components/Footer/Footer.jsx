import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { FaShieldAlt , FaHeart, FaLeaf } from "react-icons/fa";

import logo from "../../assets/logo.jpeg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="logoslogan">
           <img src={logo} alt="Zogiraa Logo" className="logo-img" />
          <div className="brand-logo">Zogiraa</div>
          </div>
          <p className="sub-heading">Connecting skilled workers with opportunities worldwide.</p>

         <div className="brand-points">
  <span>
    <FaShieldAlt  className="point-icon" />
    100% Genuine & Trusted
  </span>

  <span>
    <FaHeart className="point-icon" />
    Creating Social Impact
  </span>

  <span>
    <FaLeaf className="point-icon" />
    Self-Sustainable Model
  </span>
</div>

        </div>
      </div>

      <div className="footer-content">
        <div className="footer-links">
          <div>
            <h4>At Zogiraa</h4>
            <a>About Us</a>
            <a>Contact Us</a>
            <a>Services & Plans</a>
            <a>Media & Testimonials</a>
            <a>Career</a>
            <a>How It Works</a>
          </div>

          <div>
            <h4>Sign In</h4>
            <a>Workers</a>
            <a>Employers</a>
            <a>Training / Internship</a>
            <a>Suppliers</a>
            <a>Partners</a>
          </div>

          <div>
            <h4>Knowledge Hub</h4>
            <a>Blog</a>
            <a>Tips & Benefits for Employers</a>
            <a>Job Readiness Tips & Benefits</a>
            <a>Government Schemes, Worker Rights</a>
          </div>

          <div>
            <h4>Important Policies</h4>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
            <Link to="/refund-policy">Refund & Cancellation Policy</Link>
            <Link to="/payment-policy">Payment Policy</Link>
          </div>

          <div>
            <h4>Make Money With Us</h4>
            <a>Sell on Zogiraa</a>
            <a>Refer & Earn</a>
            <a>Zogiraa Global</a>
            <a>Become an Affiliate</a>
            <a>Advertise Your Brand</a>
            <a>Invest & Earn Profits</a>
          </div>
        </div>

        <div className="footer-cards">
          <div className="footer-card">
            <h4>Contact Us</h4>
            <p>+91 7669933552</p>
            <p>HQ: h54 sector 9, Noida 201301</p>
            <button className="whatsapp-btn">WhatsApp Support</button>
            <p className="email">support@zogiraa.com</p>
          </div>

          <div className="footer-card">
            <h4>Subscribe for Updates</h4>
            <p>Stay in the loop with the latest job alerts, training info, and success stories</p>
            <input placeholder="Enter your email" />
            <input placeholder="Mobile number" />
            <button className="subscribe-btn">Subscribe Now</button>
          </div>

          <div className="footer-card">
            <h4>Experience Zogiraa on Mobile</h4>
            <div className="qr-box"></div>
            <div className="store-buttons">
              <button className="store-btn apple">App Store</button>
              <button className="store-btn android">Play Store</button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Connect With Us</p>
  <div className="social-icons">
  <span className="fb"><FaFacebookF /></span>
  <span className="ig"><FaInstagram /></span>
  <span className="in"><FaLinkedinIn /></span>
  <span className="tw"><FaTwitter /></span>
  <span className="yt"><FaYoutube /></span>
  <span className="wa"><FaWhatsapp /></span>
</div>


        <p className="copyright">
          © 2025 Zogiraa. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
