import React from "react";
import "./About.css";
import workerImg from "../assets/about.png"; 

const AboutZogiraa = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h1>About Zogiraa</h1>
          <h2>
            Hunar Bhi, <br />
            Rojgar Bhi
          </h2>
          <p>
            Digitally organizing and empowering India's semi-skilled workforce
            with jobs, dignity, and sustainable livelihoods.
          </p>
        </div>
        <div className="about-image-card">
          <img src={workerImg} alt="Workers Illustration" />
        </div>
      </div>
    </section>
  );
};

export default AboutZogiraa;
