import React from "react";
import "./KnowledgeHub.css";

export default function EmployerTips() {
  return (
    <>
      <div className="kh-page-header">
        <h2>Tips & Benefits for Employers</h2>
        <p>Hiring tips, compliance pointers, and productivity guidance.</p>
      </div>

      <div className="kh-grid">
        <div className="kh-card">
          <h3>Hiring Checklist</h3>
          <ul className="kh-list">
            <li>Define role + skill requirements</li>
            <li>Verify documents and experience</li>
            <li>Clear contract & payment terms</li>
          </ul>
        </div>

        <div className="kh-card">
          <h3>Best Practices</h3>
          <ul className="kh-list">
            <li>Fair wages & timely payment</li>
            <li>Safe work environment</li>
            <li>Respectful communication</li>
          </ul>
        </div>
      </div>
    </>
  );
}
