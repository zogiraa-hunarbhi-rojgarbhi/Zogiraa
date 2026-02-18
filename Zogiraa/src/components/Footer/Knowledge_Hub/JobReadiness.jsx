import React, { useState } from "react";
import "./JobReadiness.css";

const MODULES = [
  {
    id: "m1",
    title: "Essential Skills for Construction & Site Jobs",
    icon: "🧰",
    points: [
      "Clear communication with supervisor and team",
      "Basic safety discipline (PPE, hazard awareness)",
      "Reliability: on-time, consistent attendance",
      "Teamwork and following instructions",
      "Basic measurement & tool handling (as per role)",
    ],
    detail:
      "Employers value workers who are consistent, safe, and easy to coordinate with. Even if your skill level is basic, reliability and safety behavior can help you get repeat work.",
  },
  {
    id: "m2",
    title: "Job Profile Setup (Your First Step)",
    icon: "🪪",
    points: [
      "Use correct role name: Mason / Helper / Painter / Electrician, etc.",
      "Add experience duration (months/years) honestly",
      "Choose preferred location + shift timing",
      "Keep phone number active for calls/WhatsApp",
      "Upload documents only on official portal",
    ],
    detail:
      "A clean profile improves matching. Keep your job role and skills specific. Example: “Mason (brickwork + plaster)” is better than “Construction worker”.",
  },
  {
    id: "m3",
    title: "Resume / Work Summary (Even If You Don’t Have Resume)",
    icon: "📄",
    points: [
      "Write 3 lines: role, experience, key skills",
      "Mention last 1–2 sites/projects (if any)",
      "Add tools handled: drill, mixer, trowel, level etc.",
      "Add certificates/training if available",
      "Keep it short and factual",
    ],
    detail:
      "If you don’t have a resume, a simple “Work Summary” is enough. Many hires happen based on a clear summary + verification + availability.",
  },
  {
    id: "m4",
    title: "Interview & Site Joining Checklist",
    icon: "✅",
    points: [
      "Confirm wage + payment date + overtime rate",
      "Confirm work hours + weekly off (if any)",
      "Ask about safety gear: provided or self-arranged",
      "Keep documents ready: ID + bank details",
      "Reach on time; first impression matters",
    ],
    detail:
      "Before joining, make sure wage and payment schedule are clear. Most problems happen because terms are not confirmed early.",
  },
];

export default function JobReadiness() {
  const [openId, setOpenId] = useState(null);
  const toggle = (id) => setOpenId((p) => (p === id ? null : id));

  return (
    <div className="jr-wrap">
      {/* Hero */}
      <section className="jr-hero">
        <div className="jr-left">
          <div className="jr-chip">Job Readiness • Construction Workforce</div>
          <h2 className="jr-title">Job Readiness Tips & Benefits</h2>
          <p className="jr-sub">
            Essential skills, profile setup, work summary, and interview guidance for
            construction workers and job seekers.
          </p>

          <div className="jr-actions">
            <div className="jr-action">
              <div className="jr-action-top">Quick Tip</div>
              <div className="jr-action-main">Be consistent + be safe = more repeat work</div>
            </div>
            <div className="jr-action">
              <div className="jr-action-top">Keep Ready</div>
              <div className="jr-action-main">ID + phone + bank details + skills</div>
            </div>
          </div>
        </div>

        <div className="jr-right">
          <img
            className="jr-hero-img"
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
            alt="Job readiness"
          />
        </div>
      </section>

      {/* Modules */}
      <section className="jr-section">
        <div className="jr-head">
          <h3 className="jr-h3">Readiness Modules</h3>
          <p className="jr-muted">Click “View Details” to expand each module.</p>
        </div>

        <div className="jr-grid">
          {MODULES.map((m) => {
            const open = openId === m.id;
            return (
              <article className={`jr-card ${open ? "open" : ""}`} key={m.id}>
                <div className="jr-card-top">
                  <div className="jr-icon">{m.icon}</div>
                  <h4 className="jr-card-title">{m.title}</h4>
                </div>

                <ul className="jr-list">
                  {m.points.map((x, i) => (
                    <li key={i}>{x}</li>
                  ))}
                </ul>

                <button className="jr-btn" type="button" onClick={() => toggle(m.id)}>
                  {open ? "Hide Details ↑" : "View Details →"}
                </button>

                {open && (
                  <div className="jr-expand">
                    <p className="jr-expand-text">{m.detail}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* Footer note */}
      <div className="jr-footer">
        Note: Guidance is general. Always confirm wage terms, site rules, and official requirements
        on your portal/notice board.
      </div>
    </div>
  );
}
