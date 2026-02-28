import React from "react";
import "./OurStory.css";
import {
  FaUsers,
  FaMobileAlt,
  FaGraduationCap,
  FaBriefcase,
  FaLeaf,
} from "react-icons/fa";

const OurStory = () => {
  return (
    <section className="story-wrapper">
      <div className="story-container">
        <h2 className="story-title">Our Story</h2>

        <p className="story-subtitle">
          For decades, daily wage workers relied on local chowks to find jobs.
          ZOGIRAA is transforming this traditional setup into a digital ecosystem
          with verified identity, skill training, and dignified employment.
        </p>

        <div className="timeline">
          <div className="timeline-line"></div>

          <div className="timeline-dot blue"></div>
          <div className="timeline-item left pink-card">
            <div className="icon pink">
              <FaUsers />
            </div>
            <h4>Chowk Workers Waiting</h4>
            <p>Traditional job hunting at local gathering spots</p>
          </div>

          <div className="timeline-dot yellow"></div>
          <div className="timeline-item right yellow-card">
            <div className="icon yellow">
              <FaMobileAlt />
            </div>
            <h4>Digital Onboarding</h4>
            <p>Easy registration and identity verification</p>
          </div>

          <div className="timeline-dot blue"></div>
          <div className="timeline-item left blue-card">
            <div className="icon blue">
              <FaGraduationCap />
            </div>
            <h4>Training & Certification</h4>
            <p>Skill enhancement and professional development</p>
          </div>

          <div className="timeline-dot yellow"></div>
          <div className="timeline-item right purple-card">
            <div className="icon purple">
              <FaBriefcase />
            </div>
            <h4>Job Placements</h4>
            <p>Contract-based employment opportunities</p>
          </div>

          <div className="timeline-dot blue"></div>
          <div className="timeline-item left green-card">
            <div className="icon green">
              <FaLeaf />
            </div>
            <h4>Financial Growth</h4>
            <p>Banking, payments and family prosperity</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
