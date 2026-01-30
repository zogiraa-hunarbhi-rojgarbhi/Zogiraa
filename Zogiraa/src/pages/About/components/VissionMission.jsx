import React from "react";
import "./VissionMission.css";
import { FaGlobe, FaRocket, FaCheck } from "react-icons/fa";

const VissionMission = () => {
  return (
    <section className="vm-wrapper">
      <div className="vm-container">
        <div className="vm-card">
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
        <div className="vm-card">
          <div className="vm-icon yellow">
            <FaRocket />
          </div>
          <h3 className="vm-title yellow-text">Mission</h3>
          <ul className="vm-list">
            <li>
              <FaCheck /> Organize and empower India's labor force through
              digital identity & jobs
            </li>
            <li>
              <FaCheck /> Provide skill enhancement, certification, and
              onboarding
            </li>
            <li>
              <FaCheck /> Ensure transparency, trust, and fair wages
            </li>
            <li>
              <FaCheck /> Build an inclusive ecosystem for long-term growth
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VissionMission;
