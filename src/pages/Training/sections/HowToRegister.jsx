import "./HowToRegister.css";

const steps = [
  {
    id: 1,
    title: "Choose Course",
    desc: "Select your preferred training",
  },
  {
    id: 2,
    title: "Fill Simple Form",
    desc: "Basic details required",
  },
  {
    id: 3,
    title: "Upload Aadhaar",
    desc: "Optional verification",
  },
  {
    id: 4,
    title: "Get Trainer Call",
    desc: "Within 24 hours",
  },
  {
    id: 5,
    title: "Start Training!",
    desc: "Begin your journey",
  },
];

export default function HowToRegister() {
  return (
    <div className="register-section">
      {/* HEADER */}
      <h2>📝 How to Register</h2>
      <p className="subtitle">Simple 5-step process</p>

      {/* STEPS */}
      <div className="register-steps">
        {steps.map((step) => (
          <div className="register-step" key={step.id}>
            <div className="step-circle">{step.id}</div>
            <h4>{step.title}</h4>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>

      {/* HELP BUTTON */}
      <button className="help-btn">📞 Need Help? Call Us</button>

      {/* CERTIFICATE */}
      <div className="certificate-wrapper">
        <p className="sample-text">Sample Certificate</p>

        <div className="certificate-box">
          <h5>CERTIFICATE OF COMPLETION</h5>
          <p>This is to certify that</p>
          <h3>[Your Name]</h3>
          <p>has successfully completed</p>
          <strong>Professional Electrician Course</strong>

          <div className="certificate-footer">
            <span>ZOGIRAA VERIFIED</span>
            <span>Date: Jan 2024</span>
          </div>
        </div>

        <p className="zoom-text">Tap to Zoom In</p>
      </div>

      {/* IMPACT */}
      <div className="impact-section">
        <h3>📈 ZOGIRAA Training Impact</h3>

        <div className="impact-grid">
          <div>
            <h4 className="orange">4,500+</h4>
            <p>Enrolled Students</p>
          </div>
          <div>
            <h4 className="green">2,800+</h4>
            <p>Successfully Placed</p>
          </div>
          <div>
            <h4 className="blue">3,020+</h4>
            <p>Trained Professionals</p>
          </div>
          <div>
            <h4 className="purple">100%</h4>
            <p>Verified Govt Programs</p>
          </div>
        </div>
      </div>
    </div>
  );
}
