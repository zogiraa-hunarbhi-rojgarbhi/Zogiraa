import React from "react";
import "./Partner.css";
import { MdEmail, MdHandshake, MdCampaign, MdPaid } from "react-icons/md";

const Partner = () => {
  return (
    <div className="partner-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-top-img">
          <img
            src="/images/Header.png"
            alt="Handshake"
          />
        </div>
        <div className="hero-content">
          <h1>Partner with ZOGIRAA – Grow With Us</h1>
          <p>
            Be an affiliate, advertise your brand, or invest with us to earn
            sustainable profits while empowering India's workforce.
          </p>
          <a href="mailto:partnerships@zogiraa.com" className="hero-btn">
            <MdEmail className="icon" />
            Mail Us at partnerships@zogiraa.com
          </a>
        </div>
      </section>

      {/* Cards Section */}
      <section className="cards-section">
        <div className="card">
          <div className="card-icon-circle blue-circle">
            <MdHandshake />
          </div>
          <h2 className="blue-text">Become an Affiliate</h2>
          <div className="card-img-container">
            <img
              src="/images/affiliate.png"
              alt="Affiliate"
              className="card-img"
            />
          </div>
          <div className="card-points">
            <p>
              Join as an affiliate partner & earn commissions by promoting
              ZOGIRAA.
            </p>
            <p>
              Access to referral links, promo materials, and tracking dashboard.
            </p>
            <p>
              Help connect workers & employers while generating steady income.
            </p>
          </div>
          <a href="mailto:partnerships@zogiraa.com" className="card-btn blue-btn">
            <MdEmail className="icon" />
            Mail Us to Become an Affiliate
          </a>
        </div>

        <div className="card">
          <div className="card-icon-circle yellow-circle">
            <MdCampaign />
          </div>
          <h2 className="yellow-text">Advertise Your Brand</h2>
          <div className="card-img-container">
            <img
              src="/images/adv.png"
              alt="Advertise"
              className="card-img"
            />
          </div>
          <div className="card-points">
            <p>Showcase your brand to a wide base of workers & employers.</p>
            <p>Targeted digital campaigns inside ZOGIRAA app & website.</p>
            <p>Increase visibility, trust, and direct conversions.</p>
          </div>
          <a href="mailto:partnerships@zogiraa.com" className="card-btn yellow-btn">
            <MdEmail className="icon" />
            Mail Us to Advertise
          </a>
        </div>

        <div className="card">
          <div className="card-icon-circle green-circle">
            <MdPaid />
          </div>
          <h2 className="green-text">Invest & Earn Profits</h2>
          <div className="card-img-container">
            <img
              src="/images/invest.png"
              alt="Invest"
              className="card-img"
            />
          </div>
          <div className="card-points">
            <p>Support ZOGIRAA's mission while earning strong returns.</p>
            <p>Invest in India's growing workforce solutions platform.</p>
            <p>Be part of a scalable, impactful ecosystem.</p>
          </div>
          <a href="mailto:partnerships@zogiraa.com" className="card-btn green-btn">
            <MdEmail className="icon" />
            Mail Us to Invest
          </a>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bottom-cta">
        <div className="bottom-img-container">
          <img
            src="/images/zog.png"
            alt="Team"
            className="bottom-img"
          />
        </div>
        <h2>
          Together, we can build India's most trusted workforce ecosystem.
          Whether you're an affiliate, a brand, or an investor — ZOGIRAA
          welcomes you.
        </h2>
        <a href="mailto:partnerships@zogiraa.com" className="bottom-btn">
          <MdEmail className="icon" />
          Mail Us Now - partnerships@zogiraa.com
        </a>
      </section>
    </div>
  );
};

export default Partner;
