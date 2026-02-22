import React from "react";
import "./KnowledgeHub.css";

export default function GovernmentSchemes() {
  return (
    <>
      <div className="kh-page-header">
        <h2>Government Schemes & Worker Rights</h2>
        <p>Awareness around schemes, safety, and worker protections.</p>
      </div>

      <div className="kh-grid">
        <div className="kh-card">
          <h3>Worker Rights</h3>
          <ul className="kh-list">
            <li>Written agreement (where applicable)</li>
            <li>Timely wages & fair working hours</li>
            <li>Safe workplace & basic protections</li>
          </ul>
        </div>

        <div className="kh-card">
          <h3>Schemes (Add Later)</h3>
          <p>You can list schemes here or fetch dynamically from your backend.</p>
        </div>
      </div>
    </>
  );
}


