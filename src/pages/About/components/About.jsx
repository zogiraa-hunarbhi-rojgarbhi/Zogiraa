import React from "react";
import "./About.css";
import heroImg from "../../../assets/about_hero_workers.png";
import OurStory from "./OurStory";
import VissionMission from "./VissionMission";
import WhatWeDo from "./WhatWeDo";
import WhyZogiraaMatters from "./WhyZogiraaMatters";
import CommunityStories from "./CommunityStories";
import FinalBanner from "./FinalBanner";

const AboutZogiraa = () => {
  return (
    <div className="about-page-wrapper">
      {/* 1. Hero Section */}
      <section className="about-hero-section">
        <div className="about-hero-content">
          <div className="about-hero-text">
            <h1>About Zogiraa</h1>
            <h2 className="tagline-primary">
              Hunar Bhi, <br />
              Rojgar Bhi
            </h2>
            <p className="hero-description">
              Digitally organizing and empowering India's semi-skilled workforce
              with jobs, dignity, and sustainable livelihoods.
            </p>
          </div>
          <div className="about-hero-image">
            <img src={heroImg} alt="Zogiraa Workers" />
          </div>
        </div>
      </section>

      {/* 2. Our Story Section */}
      <OurStory />

      {/* 3. Vision & Mission Section */}
      <VissionMission />

      {/* 4. What We Do Section */}
      <WhatWeDo />

      {/* 5. Why Zogiraa Matters (Impact Section) */}
      <WhyZogiraaMatters />

      {/* 6. Community & Stories Section */}
      <CommunityStories />

      {/* 7. Final Triumph Banner */}
      <FinalBanner />
    </div>
  );
};

export default AboutZogiraa;
