import React from "react";
import "./ReferEarn.css";
import referImg from "../assets/refer.png";

const ReferEarn = () => {
  return (
    <div>

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Zogiraa</h2>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/refer">Refer & Earn</a>
          <a href="/advertise">Advertise</a>
          <a href="/invest">Invest</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-left">
          <h1>Refer Contractors. Earn Passive Income.</h1>
          <p>
            Share Zogiraa with suppliers & contractors and earn commission
            every time they complete transactions.
          </p>
          <button className="primary-btn">Get Referral Link</button>
        </div>

        <div className="hero-right">
          <img src={referImg} alt="Refer & Earn" />
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>What is Refer & Earn?</h2>
        <p>
          Our referral program allows you to earn rewards by introducing verified
          contractors and suppliers to the platform.
        </p>
      </section>

      {/* Features */}
      <section className="features">
        <div className="feature-card">
          <h3>Instant Tracking</h3>
          <p>Track every referral in real-time.</p>
        </div>

        <div className="feature-card">
          <h3>High Commission</h3>
          <p>Earn competitive commission on every deal.</p>
        </div>

        <div className="feature-card">
          <h3>Lifetime Earnings</h3>
          <p>Get rewarded for long-term partnerships.</p>
        </div>
      </section>

    </div>
  );
};

export default ReferEarn;
