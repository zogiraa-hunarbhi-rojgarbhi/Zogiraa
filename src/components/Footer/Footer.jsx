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
  FaLeaf,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-1.png";

const Footer = ({ onLoginClick }) => {
  return (
    <footer className="footer">
      {/* ===== TOP BRAND SECTION ===== */}
      <div className="footer-top">
        <div className="footer-brand">
          <div className="logoslogan">
            <img src={logo} alt="Zogiraa Logo" className="footer-logo-img" />
            <h2 className="brand-logo">हुनर भी, रोज़गार भी</h2>
          </div>

          <p className="sub-heading">
            Connecting skilled workers with opportunities worldwide.
          </p>

          <div className="brand-points">
            <span>
              <FaShieldAlt className="point-icon" /> 100% Genuine & Trusted
            </span>
            <span>
              <FaHeart className="point-icon" /> Creating Social Impact
            </span>
            <span>
              <FaLeaf className="point-icon" /> Self-Sustainable Model
            </span>
          </div>
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="footer-content">
        <div className="footer-main-grid">
          {/* Links Grid */}
          <div className="footer-links-container">
            <div className="links-column">
              <h4>At Zogiraa</h4>
              <Link to="/about">About Us</Link>
              <Link to="/contact-us">Contact Us</Link>
              <Link to="/services-and-plans">Services & Plans</Link>
              <Link to="/how-it-works">How It Works</Link>
              <Link to="/careers">Career</Link>
            </div>

            <div className="links-column">
              <h4>Sign In</h4>
              <a href="#" onClick={(e) => { e.preventDefault(); onLoginClick?.('worker'); }}>Workers</a>
              <a href="#" onClick={(e) => { e.preventDefault(); onLoginClick?.('employer'); }}>Employers</a>
              <Link to="/training">Training / Internship</Link>
              <Link to="/suppliers">Suppliers</Link>
              <Link to="/partner-with-us">Partners</Link>
            </div>

            <div className="links-column">
              <h4>Knowledge Hub</h4>
              <Link to="/knowledge/blog">Blog</Link>
              <Link to="/knowledge/employers">Employer Tips</Link>
              <Link to="/knowledge/job-readiness">Job Readiness</Link>
              <Link to="/knowledge/government-schemes">Government Schemes</Link>
            </div>

            <div className="links-column">
              <h4>Important Policies</h4>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-and-conditions">Terms & Conditions</Link>
              <Link to="/refund-policy">Refund & Cancellation Policy</Link>
              <Link to="/payment-policy">Payment Policy</Link>
            </div>

            <div className="links-column">
              <h4>Make Money</h4>
              <Link to="/">Sell on Zogiraa</Link>
              <Link to="/">Refer & Earn</Link>
              <Link to="/">Zogiraa Global</Link>
              <Link to="/">Become an Affiliate</Link>
            </div>
          </div>

          {/* Cards Sidebar */}
          <div className="footer-cards-container">
            {/* Card 1: Contact Us */}
            <div className="sidebar-card">
              <h4>Contact Us</h4>
              <p>+91 7669933552</p>
              <p style={{ fontSize: '11px', marginBottom: '4px' }}><strong>HQ:</strong> 2nd Floor, H-54, Sector-9, Noida, G.B. Nagar UP-201301</p>
              <p style={{ fontSize: '11px', marginBottom: '4px' }}><strong>Regd:</strong> Shanti Path, Saristabad, Patna-800001, Bihar</p>
              <p style={{ fontSize: '11px', marginBottom: '4px' }}><strong>Branch:</strong> Pitamaheshwar Ghat, Gaya-823001, Bihar</p>
              <a
                href="https://wa.me/917669933552"
                target="_blank"
                rel="noreferrer"
                className="whatsapp-btn-link"
              >
                <FaWhatsapp /> WhatsApp Support
              </a>
              <p className="email">support@zogiraa.com</p>
            </div>

            {/* Card 2: Get the App */}
            <div className="sidebar-card">
              <h4>Get the App</h4>
              <p>Experience Zogiraa on your mobile device.</p>
              <div className="store-buttons">
                <button className="store-btn apple">
                  <FaApple /> App Store
                </button>
                <button className="store-btn android">
                  <FaGooglePlay /> Play Store
                </button>
              </div>
            </div>

            {/* Card 3: Subscribe */}
            <div className="sidebar-card">
              <h4>Subscribe for Updates</h4>
              <p>Get latest job alerts and success stories.</p>
              <div className="subscribe-form">
                <input type="email" placeholder="Enter your email" />
                <button className="subscribe-btn">Subscribe Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== BOTTOM SECTION ===== */}
      <div className="footer-bottom">
        <div className="bottom-content">
          <p className="connect-text">Connect With Us</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=61577613479855" target="_blank" rel="noreferrer" className="fb" title="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/zogiraa/" target="_blank" rel="noreferrer" className="ig" title="Instagram">
              <FaInstagram />
            </a>
            <a href="https://x.com/zogiraa3785" target="_blank" rel="noreferrer" className="tw" title="Twitter">
              <FaTwitter />
            </a>
            <a href="https://www.youtube.com/@zogiraa" target="_blank" rel="noreferrer" className="yt" title="YouTube">
              <FaYoutube />
            </a>
            <a href="https://wa.me/917669933552" target="_blank" rel="noreferrer" className="wa" title="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
          <p className="copyright">
            © {new Date().getFullYear()} Zomira World Pvt Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
