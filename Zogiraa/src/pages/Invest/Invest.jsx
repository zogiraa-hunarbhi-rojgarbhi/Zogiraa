import React from "react";
import "./Invest.css";
import investImg from "../assets/invest.png";

const Invest = () => {
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

      <section className="hero green-bg">
        <div className="hero-left">
          <h1>Invest in Zogiraa & Earn Profits</h1>
          <p>
            Become part of India's fastest growing B2B construction ecosystem.
          </p>
          <button className="green-btn">Become an Investor</button>
        </div>

        <div className="hero-right">
          <img src={investImg} alt="Invest" />
        </div>
      </section>

      <section className="about-section">
        <h2>Why Invest With Us?</h2>
        <p>
          Revenue sharing model, transparent reports, and long-term equity growth.
        </p>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>Revenue Sharing</h3>
          <p>Earn percentage of platform profits.</p>
        </div>
        <div className="feature-card">
          <h3>Equity</h3>
          <p>Early investor advantage.</p>
        </div>
        <div className="feature-card">
          <h3>Growth Reports</h3>
          <p>Monthly transparent updates.</p>
        </div>
      </section>

    </div>
  );
};

export default Invest;
