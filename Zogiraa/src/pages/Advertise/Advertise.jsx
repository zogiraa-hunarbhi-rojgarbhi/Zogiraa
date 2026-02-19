import React from "react";
import "./Advertise.css";
import advertiseImg from "./../../assets/advertise.jpg";

const Advertise = () => {
  return (
    <div>

      <nav className="navbar">
        <h2 className="logo">Zogiraa</h2>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/refer">Refer & Earn</a>
          <a href="/advertise">Advertise</a>
          <a href="/invest">Invest</a>
        </div>
      </nav>

      <section className="hero orange-bg">
        <div className="hero-left">
          <h1>Advertise Your Brand to Verified Contractors</h1>
          <p>
            Showcase your products to thousands of active construction professionals.
          </p>
          <button className="orange-btn">Start Advertising</button>
        </div>

        <div className="hero-right">
          <img src={advertiseImg} alt="Advertise" />
        </div>
      </section>

      <section className="about-section">
        <h2>Boost Your Brand Visibility</h2>
        <p>
          Get targeted exposure, better ROI and measurable campaign performance.
        </p>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>Targeted Ads</h3>
          <p>Reach verified contractors only.</p>
        </div>
        <div className="feature-card">
          <h3>Analytics</h3>
          <p>Track impressions & conversions.</p>
        </div>
        <div className="feature-card">
          <h3>High ROI</h3>
          <p>Better returns compared to traditional marketing.</p>
        </div>
      </section>

    </div>
  );
};

export default Advertise;
