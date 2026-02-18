import './Footer.css';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
function Footer() {
  return (
    <>
      <div className="main-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Zogiraa</h3>
            <p>India's largest B2B platform for construction materials</p>
          </div>
          <div className="footer-links">
            <div>
              <h4>For Sellers</h4>
              <ul>
                <li>Start Selling</li>
                <li>Seller Dashboard</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div>
              <h4>Support</h4>
              <ul>
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-icons">
              <Facebook size={20} style={{fill:'white'}} />
              <Twitter size={20} style={{fill:'white'}} />
              <Linkedin size={20} style={{fill:'white'}} />
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Zogiraa. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}
export default Footer;