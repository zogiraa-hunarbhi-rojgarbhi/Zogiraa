import "./UserPolicy.css";

export default function UserPolicy() {
  return (
    <div className="policy-page">
      {/* HERO */}
      <section className="policy-hero">
        <div>
          <h1>User Policy</h1>
          <p>Your Rights, Responsibilities & Safety with ZOGIRAA</p>
          <span className="trust-badge">✔ Trusted by 100,000+ Workers</span>
        </div>
      </section>

      {/* INTRO */}
      <section className="policy-intro">
        <h2>Transparency, Trust & Safety First</h2>
        <p>
          At ZOGIRAA, we are committed to ensuring transparency, trust, and
          safety for every worker on our platform. By following these simple
          rules, workers can access verified jobs, digital payments, training
          benefits, and long-term growth opportunities.
        </p>
      </section>

      {/* GUIDELINES */}
      <section className="policy-guidelines">
        <h3>Policy Guidelines</h3>
        <p className="subtitle">
          Follow these essential rules for a successful experience
        </p>

        <div className="policy-grid">
          <PolicyCard
            title="Job Acceptance & Platform Integrity"
            items={[
              "All communication must be through ZOGIRAA only",
              "Direct dealing outside app = policy breach",
              "May result in suspension or permanent block",
            ]}
          />

          <PolicyCard
            title="Payment Terms"
            items={[
              "Payments via linked bank/UPI only",
              "Released within 2–3 working days",
              "No cash demands or private negotiations",
            ]}
          />

          <PolicyCard
            title="Order Cancellation Policy"
            items={[
              "Up to 3 cancellations per month allowed",
              "50% wage deduction for cancellations",
              "Excess cancellations reduce profile visibility",
            ]}
          />

          <PolicyCard
            title="Code of Conduct"
            items={[
              "Discipline, punctuality & respect required",
              "Zero tolerance for fraud, theft, substance abuse",
              "Violations may lead to legal action",
            ]}
          />

          <PolicyCard
            title="Profile & KYC"
            items={[
              "Accurate KYC information mandatory",
              "Fake documents = profile rejection",
              "Document misuse leads to legal action",
            ]}
          />

          <PolicyCard
            title="Dispute Resolution"
            items={[
              "ZOGIRAA acts as neutral mediator",
              "Disputes must be raised within 3 days",
              "Compliance team decision is final",
            ]}
          />

          <PolicyCard
            title="Confidentiality & Data Privacy"
            items={[
              "Cannot share employer contacts/addresses",
              "Data misuse strictly prohibited",
              "Privacy protection guaranteed",
            ]}
          />

          <PolicyCard
            title="General Compliance"
            items={[
              "Must follow all updated terms",
              "ZOGIRAA reserves right to modify policies",
              "Updates communicated via app notifications",
            ]}
          />
        </div>
      </section>

      {/* FOOTER IMPACT */}
      <section className="policy-impact">
        <h3>Built to Empower Workers</h3>
        <p>
          ZOGIRAA is built to empower workers with dignity, fairness, and
          growth. By following these policies, you ensure trust, transparency,
          and better opportunities for yourself and millions like you.
        </p>

        <div className="impact-stats">
          <div>
            <strong>100K+</strong>
            <span>Active Workers</span>
          </div>
          <div>
            <strong>₹50Cr+</strong>
            <span>Payments Processed</span>
          </div>
          <div>
            <strong>4.8★</strong>
            <span>Worker Rating</span>
          </div>
        </div>
      </section>
    </div>
  );
}

/* Small reusable card */
function PolicyCard({ title, items }) {
  return (
    <div className="policy-card">
      <h4>{title}</h4>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
