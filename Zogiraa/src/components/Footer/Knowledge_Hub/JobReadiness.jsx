import React from "react";
import "./KnowledgeHub.css";

export default function JobReadiness() {
  return (
    <>
      <div className="kh-page-header">
        <h2>Job Readiness Tips & Benefits</h2>
        <p>Essential skills, resume tips, and interview guidance.</p>
      </div>

      <div className="kh-grid">
        <div className="kh-card">
          <h3>Essential Skills</h3>
          <ul className="kh-list">
            <li>Communication & teamwork</li>
            <li>Problem-solving abilities</li>
            <li>Time management & reliability</li>
          </ul>
        </div>

        <div className="kh-card">
          <h3>Resume & Interview Tips</h3>
          <ul className="kh-list">
            <li>Highlight relevant experience</li>
            <li>Practice common interview questions</li>
            <li>Research companies beforehand</li>
          </ul>
        </div>
      </div>
    </>
  );
}
