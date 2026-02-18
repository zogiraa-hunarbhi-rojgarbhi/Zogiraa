import React from "react";
import "./Global.css";
import { 
  Briefcase, 
  Globe, 
  CheckCircle, 
  Monitor, 
  HardHat, 
  Bed, 
  Truck, 
  HeartPulse, 
  Wrench,
  UserCheck,
  GraduationCap,
  Plane,
  Headset,
  CreditCard,
  Heart,
  TrendingUp,
  MapPin
} from "lucide-react";

import heroImg from "./images/global-hero.png";
import mapImg from "./images/global-map.png";
import constructionImg from "./images/construction.png";
import hospitalityImg from "./images/hospitality.png";
import logisticsImg from "./images/logistics.png";
import healthcareImg from "./images/healthcare.png";
import tradesImg from "./images/trades.png";
import footerImg from "./images/footer.png";

const Global = () => {
  return (
    <div className="global-container">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-left">
            <h1>
              <span className="brand-name">ZOGIRAA Global</span><br />
              Connecting Indian Talent to the World
            </h1>
            <p>
              Your gateway to skilled workforce solutions across borders.
              From construction to hospitality, logistics to healthcare —
              ZOGIRAA delivers trusted manpower where it's needed.
            </p>
            <button className="primary-btn">
              <Briefcase size={20} />
              Partner With Us
            </button>
          </div>

          <div className="hero-right">
            <div className="hero-image-wrapper">
              <img src={heroImg} alt="Global Workers" />
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL NETWORK */}
      <section className="network">
        <div className="section-header">
          <h2>Global Network Reach</h2>
          <p>
            Presence expanding across Middle East, Southeast Asia, Africa, and Europe<br />
            with verified, trained workforce ready for deployment
          </p>
        </div>

        <div className="map-container">
          <div className="map-box">
            <img src={mapImg} alt="Global Map" />
          </div>
        </div>

        <div className="network-cards">
          <div className="info-card">
            <div className="icon-box blue">
              <Globe size={24} />
            </div>
            <h4>Multi-Region Presence</h4>
            <p>Active partnerships across 15+ countries with expanding network</p>
          </div>
          <div className="info-card">
            <div className="icon-box blue">
              <CheckCircle size={24} />
            </div>
            <h4>Verified Workforce</h4>
            <p>Skilled professionals with verified credentials and training</p>
          </div>
          <div className="info-card">
            <div className="icon-box blue">
              <Monitor size={24} />
            </div>
            <h4>Single Platform</h4>
            <p>Streamlined hiring and onboarding process for global deployment</p>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="industries">
        <div className="section-header">
          <h2>Industries We Serve Internationally</h2>
          <p>Connecting skilled Indian talent across key global industries</p>
        </div>

        <div className="industry-grid">
          <div className="industry-card peach">
            <div className="card-top">
              <div className="icon-box-small orange">
                <HardHat size={18} />
              </div>
              <h4>Construction & Infrastructure</h4>
              <p className="countries">UAE, Qatar, Saudi Arabia</p>
            </div>
            <img src={constructionImg} alt="Construction" />
          </div>

          <div className="industry-card blue-light">
            <div className="card-top">
              <div className="icon-box-small blue">
                <Bed size={18} />
              </div>
              <h4>Hospitality & Housekeeping</h4>
              <p className="countries">Singapore, Dubai, Maldives</p>
            </div>
            <img src={hospitalityImg} alt="Hospitality" />
          </div>

          <div className="industry-card green-light">
            <div className="card-top">
              <div className="icon-box-small green">
                <Truck size={18} />
              </div>
              <h4>Logistics & Supply Chain</h4>
              <p className="countries">Malaysia, Oman</p>
            </div>
            <img src={logisticsImg} alt="Logistics" />
          </div>

          <div className="industry-card pink-light">
            <div className="card-top">
              <div className="icon-box-small red">
                <HeartPulse size={18} />
              </div>
              <h4>Healthcare Support</h4>
              <p className="countries">Europe & Middle East</p>
            </div>
            <img src={healthcareImg} alt="Healthcare" />
          </div>

          <div className="industry-card purple-light">
            <div className="card-top">
              <div className="icon-box-small purple">
                <Wrench size={18} />
              </div>
              <h4>Skilled Trades</h4>
              <p className="countries">Electricians, Plumbers, Carpenters</p>
            </div>
            <img src={tradesImg} alt="Skilled Trades" />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how">
        <div className="section-header white">
          <h2>How ZOGIRAA Global Works</h2>
          <p>Your journey from India to global opportunities in 4 simple steps</p>
        </div>

        <div className="steps-container">
          <div className="step-item">
            <div className="step-icon">
              <UserCheck size={28} />
            </div>
            <h4>Worker Onboarding</h4>
            <p>Verified digital identity & skill certification in India</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step-item">
            <div className="step-icon">
              <GraduationCap size={28} />
            </div>
            <h4>Training & Orientation</h4>
            <p>Industry-specific, global-ready training programs</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step-item">
            <div className="step-icon">
              <Plane size={28} />
            </div>
            <h4>International Placement</h4>
            <p>Matching with verified employers abroad</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step-item">
            <div className="step-icon">
              <Headset size={28} />
            </div>
            <h4>Ongoing Support</h4>
            <p>Payments, dispute resolution & performance tracking</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="why">
        <div className="section-header">
          <h2>Why Choose ZOGIRAA Global?</h2>
          <p>Building dignity and growth worldwide through trusted partnerships</p>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <div className="icon-box-square green">
              <CheckCircle size={20} />
            </div>
            <h4>Trusted Manpower from India</h4>
            <p>Verified professionals with proven track records and strong work ethics</p>
          </div>
          <div className="why-card">
            <div className="icon-box-square blue">
              <Monitor size={20} />
            </div>
            <h4>End-to-End Digital Process</h4>
            <p>Streamlined digital hiring platform from application to deployment</p>
          </div>
          <div className="why-card">
            <div className="icon-box-square purple">
              <GraduationCap size={20} />
            </div>
            <h4>Industry-Specific Training</h4>
            <p>Comprehensive certification programs tailored to global standards</p>
          </div>
          <div className="why-card">
            <div className="icon-box-square orange">
              <CreditCard size={20} />
            </div>
            <h4>Reliable Payments</h4>
            <p>Secure payment processing and compliance support worldwide</p>
          </div>
          <div className="why-card">
            <div className="icon-box-square red">
              <Heart size={20} />
            </div>
            <h4>Building Dignity</h4>
            <p>Fostering respectful work environments and fair opportunities globally</p>
          </div>
          <div className="why-card">
            <div className="icon-box-square teal">
              <TrendingUp size={20} />
            </div>
            <h4>Growth Worldwide</h4>
            <p>Creating pathways for professional development and career advancement</p>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="success">
        <div className="section-header">
          <h2>Success Stories</h2>
          <p>Real experiences from workers and employers worldwide</p>
        </div>

        <div className="testimonials">
          <div className="testimonial blue-light">
            <div className="testimonial-header">
              <div className="user-avatar">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh" alt="Rajesh" />
              </div>
              <div className="user-info">
                <h4>Rajesh Kumar</h4>
                <p>Construction Worker, Dubai</p>
                <div className="flag">🇦🇪 UAE</div>
              </div>
            </div>
            <p className="quote">
              "Through ZOGIRAA, I secured a construction job in Dubai with
              fair pay and dignity. The training prepared me well, and the
              support team helped throughout my journey."
            </p>
          </div>

          <div className="testimonial peach">
            <div className="testimonial-header">
              <div className="user-avatar">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" alt="Sarah" />
              </div>
              <div className="user-info">
                <h4>Sarah Mitchell</h4>
                <p>Operations Manager, Malaysia</p>
                <div className="flag">🇲🇾 Malaysia</div>
              </div>
            </div>
            <p className="quote">
              "Our logistics operations in Malaysia became smoother with
              trained Indian staff from ZOGIRAA. Professional, skilled, and
              reliable workforce."
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER IMAGE */}
      <footer className="footer-image-container">
        <img src={footerImg} alt="Footer" className="footer-full-img" />
      </footer>

    </div>
  );
};

export default Global;
