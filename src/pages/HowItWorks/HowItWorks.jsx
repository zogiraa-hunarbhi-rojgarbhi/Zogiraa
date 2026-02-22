import "./HowItWorks.css";

const steps = [
  {
    id: 1,
    title: "Post Job",
    desc: "Describe your work and set budget",
    img: "/assets/step1.png",
  },
  {
    id: 2,
    title: "Choose Worker",
    desc: "Browse verified profiles with ratings",
    img: "/assets/step2.png",
  },
  {
    id: 3,
    title: "Confirm OTP",
    desc: "Verify worker identity before starting work",
    img: "/assets/step3.png",
  },
  {
    id: 4,
    title: "Track Attendance",
    desc: "GPS-based attendance logging",
    img: "/assets/step4.png",
  },
  {
    id: 5,
    title: "Pay & Rate",
    desc: "Make secure payments and rate",
    img: "/assets/step5.png",
  },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    text:
      "Found skilled workers quickly and efficiently. The verification process gives me confidence in hiring.",
  },
  {
    name: "Priya Sharma",
    text:
      "Easy to use interface and great customer support. Highly recommend for skilled workers.",
  },
  {
    name: "Amit Patel",
    text:
      "WorkForce helped me grow my business. I get regular clients and my income has doubled since joining.",
  },
];

export default function HowItWorks() {
  return (
    <div className="how-page">
      {/* HOW IT WORKS */}
      <section className="how-section">
        <h2>How It Works</h2>
        <p className="subtitle">
          Hiring verified workers is simple and fast
        </p>

        <div className="steps-wrapper">
          {steps.map((step, index) => (
            <div className="step-card" key={step.id}>
              <div className="step-number">{step.id}</div>
              <img src={step.img} alt={step.title} />
              <h4>{step.title}</h4>
              <p>{step.desc}</p>

              {index !== steps.length - 1 && (
                <span className="arrow">→</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonial-section">
        <h2>What Our Employers Say</h2>

        <div className="testimonial-grid">
          {testimonials.map((item, idx) => (
            <div className="testimonial-card" key={idx}>
              <div className="profile">
                <div className="avatar" />
                <div>
                  <h4>{item.name}</h4>
                  <span className="badge">Verified Employer</span>
                </div>
              </div>

              <p className="quote">“{item.text}”</p>
              <div className="stars">★★★★★</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
