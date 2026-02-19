import React, { useState } from "react";
import "./Blog.css";

const BLOGS = [
  {
    id: "b1",
    title: "How Daily Wage Workers Can Register for Verified Work",
    category: "Worker Support",
    date: "Feb 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Step-by-step registration guide for construction workers to get verified and receive job alerts.",
    details: {
      summary:
        "This platform helps construction workers create a verified profile so contractors can hire faster and fairly.",
      bullets: [
        "Keep Aadhaar/ID ready for verification",
        "Add skills: masonry, painting, plumbing, helper, etc.",
        "Select preferred location and work type (daily/weekly/monthly)",
        "Enable SMS/WhatsApp alerts for new jobs",
      ],
      steps: [
        "Open Worker Registration",
        "Fill basic details + skills",
        "Upload ID proof (if required) and submit",
        "Profile verification → start receiving job updates",
      ],
    },
  },
  {
    id: "b2",
    title: "Jobless? Here’s a Practical 7-Day Plan to Get Back to Work",
    category: "Job Readiness",
    date: "Feb 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Simple daily actions: profile, skills, calls, and interviews — built for workers and freshers.",
    details: {
      summary:
        "If you are unemployed, focus on small daily steps that quickly improve visibility and confidence.",
      bullets: [
        "Day 1: Create/Update profile + phone number active",
        "Day 2: List skills + experience (even small projects)",
        "Day 3: Apply to 10 jobs + call 3 contractors",
        "Day 4: Practice interview answers (2 minutes each)",
        "Day 5: Skill refresh (safety, tools, basic measurements)",
        "Day 6: Follow-ups + documents ready",
        "Day 7: Attend interviews + track outcomes",
      ],
      steps: [
        "Prepare documents",
        "Fix profile & visibility",
        "Apply daily and follow up",
        "Keep improving until placed",
      ],
    },
  },
  {
    id: "b3",
    title: "Construction Safety Basics Every Worker Must Follow",
    category: "Safety",
    date: "Jan 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Helmet, harness, electrical safety, and site rules — reduce accidents and protect your income.",
    details: {
      summary:
        "Safety improves job stability, reduces injuries, and builds trust with employers on government sites.",
      bullets: [
        "Wear PPE: helmet, gloves, shoes, reflective jacket",
        "Use harness for height work; never skip anchors",
        "Keep electrical tools dry; avoid damaged wires",
        "Follow supervisor instructions and safety signs",
      ],
      steps: [
        "PPE check before starting",
        "Tool inspection",
        "Safe lifting + ladder rules",
        "Report hazards immediately",
      ],
    },
  },
  {
    id: "b4",
    title: "Government Work Opportunities: Who Can Apply and How",
    category: "Govt Updates",
    date: "Jan 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Eligibility, documents, and how verified workers get priority for site-based work listings.",
    details: {
      summary:
        "Government construction work listings prioritize verified, skilled, and available workers.",
      bullets: [
        "Eligibility: minimum age + valid ID proof",
        "Documents: ID proof, address proof, bank details (if needed)",
        "Availability: location + shift preferences",
        "Verification helps reduce fraud and improves matching",
      ],
      steps: [
        "Check eligibility & documents",
        "Create profile + verify",
        "Apply on listings",
        "Attend onboarding at assigned site",
      ],
    },
  },
  {
    id: "b5",
    title: "Skill Cards: Add Your Work Skills Correctly (Masonry, Paint, Plumbing)",
    category: "Skills",
    date: "Dec 2025",
    readTime: "6 min read",
    image:
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Better skill details = better job matches. Use correct titles and practical experience points.",
    details: {
      summary:
        "Accurate skill mapping helps contractors find the right worker for the right task and pay range.",
      bullets: [
        "Mention core skill + sub-skill (e.g., Masonry: brickwork, plaster)",
        "Add experience duration (months/years)",
        "Add tools handled (trowel, mixer, level, drill, etc.)",
        "Upload work photos if allowed (optional)",
      ],
      steps: [
        "Choose skill category",
        "Add sub-skills + experience",
        "Save and update regularly",
        "Apply to matching jobs",
      ],
    },
  },
  {
    id: "b6",
    title: "Payments & Wage Transparency: What to Confirm Before Joining a Site",
    category: "Worker Rights",
    date: "Dec 2025",
    readTime: "5 min read",
    image:
    "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Before joining: wage rate, working hours, overtime, safety gear, and payment timeline.",
    details: {
      summary:
        "Clear wage terms reduce disputes and ensure workers are paid fairly and on time.",
      bullets: [
        "Confirm daily wage / monthly wage in writing (message is ok)",
        "Ask about overtime rate and pay day",
        "Confirm accommodation/transport (if provided)",
        "Check if safety gear is provided or self-arranged",
      ],
      steps: [
        "Ask wage + hours",
        "Confirm overtime + payment date",
        "Join only after clarity",
        "Keep a simple work log",
      ],
    },
  },
];

export default function Blog() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <div className="kh-wrap">
      <div className="kh-page-header">
        <div>
          <h2 className="kh-page-title">Blog</h2>
          <p className="kh-page-sub">
            Construction worker guidance, safety, government updates, and job support.
          </p>
        </div>
      </div>

      <div className="kh-blog-grid">
        {BLOGS.map((b) => {
          const isOpen = openId === b.id;

          return (
            <article className={`kh-blog-card ${isOpen ? "open" : ""}`} key={b.id}>
              <div className="kh-thumb-wrap">
                <img className="kh-thumb" src={b.image} alt={b.title} />
                <span className="kh-badge">{b.category}</span>
              </div>

              <div className="kh-blog-body">
                <div className="kh-meta">
                  <span>{b.date}</span>
                  <span className="kh-dot">•</span>
                  <span>{b.readTime}</span>
                </div>

                <h3 className="kh-blog-title">{b.title}</h3>
                <p className="kh-blog-excerpt">{b.excerpt}</p>

                <button
                  className="kh-read-btn"
                  type="button"
                  onClick={() => toggle(b.id)}
                  aria-expanded={isOpen}
                >
                  {isOpen ? "Hide Details ↑" : "Read More →"}
                </button>

                {isOpen && (
                  <div className="kh-expand">
                    <p className="kh-expand-sum">{b.details.summary}</p>

                    <div className="kh-expand-grid">
                      <div className="kh-expand-box">
                        <h4 className="kh-expand-title">Key Points</h4>
                        <ul className="kh-expand-list">
                          {b.details.bullets.map((x, i) => (
                            <li key={i}>{x}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="kh-expand-box">
                        <h4 className="kh-expand-title">Quick Steps</h4>
                        <ol className="kh-expand-list">
                          {b.details.steps.map((x, i) => (
                            <li key={i}>{x}</li>
                          ))}
                        </ol>
                      </div>
                    </div>
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
