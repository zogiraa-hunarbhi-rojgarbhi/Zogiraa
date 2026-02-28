import React from "react";
import "./VissionMission.css";
import { FaGlobe, FaLocationArrow, FaCheck } from "react-icons/fa";

const VissionMission = () => {
  return (
    <section className="vm-wrapper">
      <div className="vm-container">
        <div className="vm-card vision-card">
          <div className="vm-icon blue">
            <FaGlobe />
          </div>
          <h3 className="vm-title blue-text">Vision</h3>
          <p className="vm-text">
            To become India's leading workforce empowerment platform that
            transforms the lives of semi-skilled and daily wage workers by
            promoting dignity of labor, inclusion, and sustainable livelihoods.
          </p>
        </div>
        <div className="vm-card mission-card">
          <div className="vm-icon yellow">
            <FaLocationArrow />
          </div>
          <h3 className="vm-title yellow-text">Mission</h3>
          <ul className="vm-list">
            <li>
              <FaCheck /> Digitally organizing India's labor force with globalized identity, jobs.
            </li>
            <li>
              <FaCheck /> Provide skill enhancement, certification and onboarding.
            </li>
            <li>
              <FaCheck /> Ensure transparency, trust and fair wages.
            </li>
            <li>
              <FaCheck /> Building digital empowerment for long-term growth.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VissionMission;
