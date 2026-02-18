import "./Courses.css";

const courses = [
  {
    title: "Masonry & Construction",
    desc: "Learn professional masonry skills with modern tools and techniques",
    duration: "3 months",
    placement: "95% placement",
    icon: "🛠️",
    iconBg: "orange",
  },
  {
    title: "Electrical Work",
    desc: "Master electrical installations and maintenance work",
    duration: "4 months",
    placement: "98% placement",
    icon: "⚡",
    iconBg: "yellow",
  },
  {
    title: "Plumbing Services",
    desc: "Professional plumbing and pipe fitting training",
    duration: "2 months",
    placement: "92% placement",
    icon: "🔧",
    iconBg: "blue",
  },
];

export default function Courses() {
  return (
    <div className="courses-section">
      {/* HEADER */}
      <h2>
        📚 Choose a Course to Get Started
      </h2>
      <p className="subtitle">
        Government certified programs with 100% placement guarantee
      </p>

      {/* CARDS */}
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <div className={`course-icon ${course.iconBg}`}>
              {course.icon}
            </div>

            <h3>{course.title}</h3>
            <p className="course-desc">{course.desc}</p>

            <div className="course-meta">
              <span>⏱ {course.duration}</span>
              <span>✅ {course.placement}</span>
            </div>

            <button className="course-btn">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}
