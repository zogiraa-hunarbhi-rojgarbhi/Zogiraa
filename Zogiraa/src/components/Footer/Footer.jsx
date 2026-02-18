import React from "react";
import "./Footer.css";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaShieldAlt,
  FaHeart,
  FaLeaf
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="footer">

      {/* ===== TOP BRAND SECTION ===== */}
      <div className="footer-top">
        <div className="footer-brand">
          <div className="logoslogan">
            <img src={logo} alt="Zogiraa Logo" className="logo-img" />
            <div className="brand-logo">Zogiraa</div>
          </div>

          <p className="sub-heading">
            Connecting skilled workers with opportunities worldwide.
          </p>

          <div className="brand-points">
            <span><FaShieldAlt className="point-icon" /> 100% Genuine & Trusted</span>
            <span><FaHeart className="point-icon" /> Creating Social Impact</span>
            <span><FaLeaf className="point-icon" /> Self-Sustainable Model</span>
          </div>
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="footer-content">

        <div className="footer-links">

          {/* Column 1 */}
          <div>
            <h4>At Zogiraa</h4>
            <Link to="/about">About Us</Link>
            <Link to="/contact-us">Contact Us</Link>
            <Link to="/training">Services & Plans</Link>
            <Link to="/how-it-works">How It Works</Link>
            <Link to="/partner-with-us">Career</Link>
          </div>

          {/* Column 2 */}
          <div>
            <h4>Sign In</h4>
            <Link to="/login-workers">Workers</Link>
            <Link to="/login-employers">Employers</Link>
            <Link to="/training">Training / Internship</Link>
            <Link to="/suppliers">Suppliers</Link>
            <Link to="/partner-with-us">Partners</Link>
          </div>

          {/* Column 3 */}
          <div>
            <h4>Knowledge Hub</h4>
            <Link to="/knowledge/blog">Blog</Link>
            <Link to="/knowledge/employers">Employer Tips</Link>
            <Link to="/knowledge/job-readiness">Job Readiness</Link>
            <Link to="/knowledge/government-schemes">
              Government Schemes
            </Link>
          </div>

          {/* Column 4 */}
          <div>
            <h4>Important Policies</h4>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
            <Link to="/refund-policy">Refund & Cancellation Policy</Link>
            <Link to="/payment-policy">Payment Policy</Link>
          </div>

          {/* Column 5 */}
          <div>
            <h4>Make Money With Us</h4>
            <Link to="/sell">Sell on Zogiraa</Link>
            <Link to="/refer-earn">Refer & Earn</Link>
            <Link to="/global">Zogiraa Global</Link>
            <Link to="/affiliate">Become an Affiliate</Link>
            <Link to="/advertise">Advertise Your Brand</Link>
            <Link to="/invest">Invest & Earn</Link>
          </div>

        </div>

        {/* ===== RIGHT CARDS ===== */}
        <div className="footer-cards">

          <div className="footer-card">
            <h4>Contact Us</h4>
            <p>+91 7669933552</p>
            <p>HQ: H54 Sector 9, Noida 201301</p>
            <button className="whatsapp-btn">WhatsApp Support</button>
            <p className="email">support@zogiraa.com</p>
          </div>

          <div className="footer-card">
            <h4>Subscribe for Updates</h4>
            <p>
              Stay in the loop with the latest job alerts, training info, and success stories.
            </p>
            <input type="email" placeholder="Enter your email" />
            <input type="tel" placeholder="Mobile number" />
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

      {/* ===== BOTTOM SECTION ===== */}
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
