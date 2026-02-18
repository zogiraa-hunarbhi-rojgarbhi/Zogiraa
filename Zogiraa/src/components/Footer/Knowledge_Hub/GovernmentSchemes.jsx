import React, { useState } from "react";
import "./GovernmentSchemes.css";

const SCHEMES = [
  {
    id: "s1",
    title: "Building & Other Construction Workers (BOCW) Welfare Schemes",
    tag: "Construction Welfare",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    short:
      "Support for registered construction workers: education help, medical support, maternity benefits, and more.",
    eligibility: [
      "Registered construction worker under BOCW Board",
      "Valid ID + worker registration card",
      "Meets state-specific criteria",
    ],
    docs: ["Aadhaar/ID", "Worker registration card", "Bank details"],
  },
  {
    id: "s2",
    title: "Accident / Health Assistance for Workers",
    tag: "Safety & Health",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    short:
      "Financial assistance in case of workplace injury/accident and medical support (as per board rules).",
    eligibility: [
      "Registered worker",
      "Incident reported as per process",
      "Medical documents available",
    ],
    docs: ["Medical report", "Accident report", "Bank details"],
  },
  {
    id: "s3",
    title: "Skill Training & Upgradation Support",
    tag: "Skill Development",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1200&q=80",
    short:
      "Training support for masonry, plumbing, electrical, painting and site safety skills.",
    eligibility: ["Worker registration preferred", "Available for training schedule"],
    docs: ["ID proof", "Contact number", "Optional: registration card"],
  },
  {
    id: "s4",
    title: "Education Assistance for Workers’ Children",
    tag: "Education",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    short:
      "Scholarships/assistance for school/college expenses (state rules apply).",
    eligibility: ["Registered worker", "Child enrolled in school/college"],
    docs: ["School/college proof", "Worker card", "Bank details"],
  },
];

export default function GovernmentSchemes() {
  const [openId, setOpenId] = useState(null);
  const toggle = (id) => setOpenId((p) => (p === id ? null : id));

  return (
    <div className="gs-wrap">
      {/* Hero */}
      <section className="gs-hero">
        <div className="gs-hero-left">
          <div className="gs-pill">Government Construction Portal</div>
          <h2 className="gs-title">Government Schemes & Worker Rights</h2>
          <p className="gs-sub">
            Awareness around construction worker schemes, safety, and legal protections.
            Details vary by state/board — always verify with official notifications.
          </p>

          <div className="gs-hero-stats">
            <div className="gs-stat">
              <div className="gs-stat-num">4+</div>
              <div className="gs-stat-text">Common welfare schemes</div>
            </div>
            <div className="gs-stat">
              <div className="gs-stat-num">Rights</div>
              <div className="gs-stat-text">Safety, wages, dignity</div>
            </div>
            <div className="gs-stat">
              <div className="gs-stat-num">Docs</div>
              <div className="gs-stat-text">Keep IDs & bank info ready</div>
            </div>
          </div>
        </div>

        <div className="gs-hero-right">
          <img
            className="gs-hero-img"
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80"
            alt="Construction site"
          />
        </div>
      </section>

      {/* Worker Rights */}
      <section className="gs-section">
        <div className="gs-section-head">
          <h3 className="gs-h3">Worker Rights</h3>
          <p className="gs-muted">Basic protections every construction worker should know.</p>
        </div>

        <div className="gs-rights-grid">
          <div className="gs-right-card">
            <h4>Wages & Working Hours</h4>
            <ul>
              <li>Clear wage rate (daily/monthly) before joining</li>
              <li>Timely payment on fixed date</li>
              <li>Overtime rate should be clarified in advance</li>
            </ul>
          </div>

          <div className="gs-right-card">
            <h4>Safety & Basic Protection</h4>
            <ul>
              <li>PPE: helmet, shoes, gloves, reflective jacket</li>
              <li>Safe tools, wiring, and ladders</li>
              <li>Emergency plan + first-aid availability</li>
            </ul>
          </div>

          <div className="gs-right-card">
            <h4>Respect & Fair Treatment</h4>
            <ul>
              <li>No abusive behavior at workplace</li>
              <li>Clear instructions and role clarity</li>
              <li>Safe reporting for hazards/issues</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Schemes */}
      <section className="gs-section">
        <div className="gs-section-head">
          <h3 className="gs-h3">Popular Schemes (Construction Focus)</h3>
          <p className="gs-muted">Click “View Details” to expand eligibility and documents.</p>
        </div>

        <div className="gs-scheme-grid">
          {SCHEMES.map((s) => {
            const open = openId === s.id;
            return (
              <article className={`gs-card ${open ? "open" : ""}`} key={s.id}>
                <div className="gs-thumb">
                  <img src={s.image} alt={s.title} />
                  <span className="gs-tag">{s.tag}</span>
                </div>

                <div className="gs-body">
                  <h4 className="gs-card-title">{s.title}</h4>
                  <p className="gs-card-text">{s.short}</p>

                  <button className="gs-btn" onClick={() => toggle(s.id)} type="button">
                    {open ? "Hide Details ↑" : "View Details →"}
                  </button>

                  {open && (
                    <div className="gs-expand">
                      <div className="gs-cols">
                        <div className="gs-box">
                          <div className="gs-box-title">Eligibility</div>
                          <ul>
                            {s.eligibility.map((x, i) => (
                              <li key={i}>{x}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="gs-box">
                          <div className="gs-box-title">Required Documents</div>
                          <ul>
                            {s.docs.map((x, i) => (
                              <li key={i}>{x}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="gs-note">
                        Tip: Keep photocopies + digital photos of documents. Submit only via
                        official channels.
                      </div>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Footer Note */}
      <div className="gs-disclaimer">
        This page is for awareness. Scheme rules differ by state/board and may change.
        Always confirm with official government notifications.
      </div>
    </div>
  );
}