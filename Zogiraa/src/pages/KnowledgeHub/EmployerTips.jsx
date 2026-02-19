import React, { useState } from "react";
import "./EmployerTips.css";


const TIPS = [
  {
    id: "e1",
    title: "Hiring Checklist (Site-Ready)",
    excerpt:
      "A quick checklist to hire faster, reduce disputes, and keep projects moving.",
    points: [
      "Define work scope + required skills (mason, shuttering, helper, etc.)",
      "Verify basic ID and contact details",
      "Confirm start date, site location, shift timing",
      "Share wage, overtime, and payment date clearly",
      "Note tools/PPE responsibility (employer vs worker)",
    ],
    more:
      "Keep a simple written record (WhatsApp message is enough) of wage rate, working hours, and payment schedule. It prevents misunderstandings and improves worker retention.",
  },
  {
    id: "e2",
    title: "Compliance & Documentation",
    excerpt:
      "Basic documentation that improves transparency and protects both sides.",
    points: [
      "Maintain attendance / muster roll (daily)",
      "Keep payment proof (bank/UPI/cash register)",
      "Record safety briefing and PPE distribution",
      "Store worker emergency contact details",
    ],
    more:
      "Even minimal documentation helps during audits and reduces legal risk. Maintain records weekly and keep them easy to retrieve at the site office.",
  },
  {
    id: "e3",
    title: "Fair Wages & Payment Discipline",
    excerpt:
      "Timely, predictable payments reduce absenteeism and increase productivity.",
    points: [
      "Fix weekly/monthly payment day and follow it",
      "Clarify overtime rate before work starts",
      "Avoid delayed payments—major cause of dropouts",
      "Share payslip/message summary when possible",
    ],
    more:
      "If cash payments are used, maintain a signed acknowledgement to avoid future disputes. For digital payments, keep UPI/bank transaction screenshots stored by week.",
  },
  {
    id: "e4",
    title: "Safety & Site Management",
    excerpt:
      "Safer sites have fewer stoppages, fewer injuries, and better output.",
    points: [
      "Mandatory PPE: helmet, shoes, gloves, reflective jacket",
      "Daily tool and ladder inspection",
      "Height work requires harness + anchor check",
      "First-aid kit and emergency plan visible on site",
    ],
    more:
      "Do a 5-minute safety talk every morning and appoint one supervisor responsible for checking PPE and hazards. This small routine prevents costly incidents.",
  },
  {
    id: "e5",
    title: "Reducing Turnover (Keep Workers Longer)",
    excerpt:
      "Simple practices to reduce worker drop-off during critical project phases.",
    points: [
      "Provide clean water + basic rest area",
      "Respectful communication and clear instructions",
      "Avoid sudden wage changes",
      "Plan weekly workload to avoid long idle periods",
    ],
    more:
      "Turnover drops when workers feel stability. Clear expectations + consistent pay + basic facilities usually outperform frequent replacement hiring.",
  },
  {
    id: "e6",
    title: "Productivity Tips (Get Work Done Faster)",
    excerpt:
      "Improve output without overworking teams or increasing risk.",
    points: [
      "Daily targets + role-wise assignment (team split)",
      "Material readiness: avoid waiting time",
      "Right tool for the job (mixer, level, cutters)",
      "End-of-day review: what blocked progress today?",
    ],
    more:
      "Most productivity loss happens due to waiting—materials, approvals, tools. Track delays for 7 days and fix the top 2 causes. You’ll see immediate improvements.",
  },
];

export default function EmployerTips() {
  const [openId, setOpenId] = useState(null);
  const toggle = (id) => setOpenId((p) => (p === id ? null : id));

  return (
    <div className="kh-wrap">
      <div className="kh-page-header">
        <div>
          <h2 className="kh-page-title">Tips & Benefits for Employers</h2>
          <p className="kh-page-sub">
            Hiring tips, compliance pointers, safety, and productivity guidance for construction sites.
          </p>
        </div>
      </div>

      <div className="kh-blog-grid">
        {TIPS.map((t) => {
          const isOpen = openId === t.id;
          return (
            <article className={`kh-blog-card ${isOpen ? "open" : ""}`} key={t.id}>
              <div className="kh-tip-head">
                <h3 className="kh-blog-title">{t.title}</h3>
                <p className="kh-blog-excerpt">{t.excerpt}</p>
              </div>

              <div className="kh-blog-body">
                <ul className="kh-list">
                  {t.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>

                <button
                  className="kh-read-btn"
                  type="button"
                  onClick={() => toggle(t.id)}
                  aria-expanded={isOpen}
                >
                  {isOpen ? "Hide Details ↑" : "Read More →"}
                </button>

                {isOpen && (
                  <div className="kh-expand">
                    <p className="kh-expand-sum">{t.more}</p>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
