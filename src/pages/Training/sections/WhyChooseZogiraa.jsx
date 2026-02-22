import "./WhyChooseZogiraa.css";

const reasons = [
  {
    icon: "✅",
    title: "Govt. Certified",
    desc: "Official recognition",
  },
  {
    icon: "💼",
    title: "Job Guarantee",
    desc: "100% placement",
  },
  {
    icon: "💰",
    title: "Earn 2X More",
    desc: "Higher salary",
  },
  {
    icon: "🎓",
    title: "Expert Teachers",
    desc: "Industry experts",
  },
  {
    icon: "❤️",
    title: "100% Free",
    desc: "No hidden costs",
  },
];

const stories = [
  {
    name: "Rahul Kumar",
    age: 28,
    location: "Delhi",
    income: "₹15,000 → ₹35,000",
    role: "Electrician at Construction Company",
  },
  {
    name: "Suresh Yadav",
    age: 32,
    location: "Mumbai",
    income: "₹12,000 → ₹28,000",
    role: "Senior Mason",
  },
  {
    name: "Amit Singh",
    age: 25,
    location: "Pune",
    income: "₹10,000 → ₹25,000",
    role: "Plumbing Contractor",
  },
];

export default function WhyChooseZogiraa() {
  return (
    <div className="why-section">
      {/* ================= WHY CHOOSE ================= */}
      <h2>💡 Why Choose ZOGIRAA?</h2>

      <div className="why-grid">
        {reasons.map((item, index) => (
          <div className="why-card" key={index}>
            <div className="why-icon">{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* ================= SUCCESS STORIES ================= */}
      <div className="stories">
        <h2>🎯 Success Stories</h2>
        <p className="subtitle">Real people, real success</p>

        <div className="story-grid">
          {stories.map((story, index) => (
            <div className="story-card" key={index}>
              <div className="avatar" />

              <h4>{story.name}</h4>
              <p className="meta">
                Age {story.age}, {story.location}
              </p>

              <p className="income">{story.income}</p>
              <p className="role">{story.role}</p>

              <button className="watch-btn">▶ Watch Video</button>
            </div>
          ))}
        </div>

        <button className="view-more">View More Stories</button>
      </div>
    </div>
  );
}
