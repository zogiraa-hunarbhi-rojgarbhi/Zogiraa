import React from "react";
import "./sell.css";

import heroImg from "./../../assets/hero.jpg";
import cementImg from "./../../assets/cement.jpg";
import paintsImg from "./../../assets/paints.jpg";
import drillImg from "./../../assets/drill.jpg";
import safetyImg from "./../../assets/safety.jpg";
import steelImg from "./../../assets/steel.jpg";
import electricalImg from "./../../assets/electrical.jpg";

const Home = () => {
  return (
    <div className="home">

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Zogiraa</h2>
        <div className="nav-links">
          <a href="#">Categories</a>
          <a href="#">How it Works</a>
          <a href="#">Support</a>
          <button className="nav-btn">Start Selling</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-left">
          <h1>
            Sell Construction <br />
            Materials Directly <br />
            to Contractors
          </h1>
          <p>
            Join India's largest B2B platform for verified contractor supplies.
          </p>
          <div className="hero-buttons">
            <button className="primary-btn">Start Selling Today</button>
            <button className="secondary-btn">Learn More</button>
          </div>
        </div>

        <div className="hero-right">
          <img src={heroImg} alt="Construction handshake" />
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <h2>Top Categories</h2>
        <p>Premium construction materials for every project</p>

        <div className="category-grid">
          <div className="card">
            <img src={cementImg} alt="Cement" />
            <h3>Cement</h3>
            <p>Premium-grade ready mix</p>
          </div>

          <div className="card">
            <img src={paintsImg} alt="Paints" />
            <h3>Paints</h3>
            <p>Interior & exterior paints</p>
          </div>

          <div className="card">
            <img src={drillImg} alt="Power Tools" />
            <h3>Power Tools</h3>
            <p>Professional grade tools</p>
          </div>

          <div className="card">
            <img src={safetyImg} alt="Safety Equipment" />
            <h3>Safety Equipment</h3>
            <p>Complete safety gear</p>
          </div>

          <div className="card">
            <img src={steelImg} alt="Steel & Metal" />
            <h3>Steel & Metal</h3>
            <p>High-grade steel products</p>
          </div>

          <div className="card">
            <img src={electricalImg} alt="Electrical" />
            <h3>Electrical</h3>
            <p>Wires, cables & fittings</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
