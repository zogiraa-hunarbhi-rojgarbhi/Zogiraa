import "./QuickSupportForm.css";

export default function QuickSupportForm() {
  return (
    <section className="support-section">
      {/* HEADER */}
      <div className="support-header">
        <h2>
          Quick <span>Support</span> Form
        </h2>
        <p>
          Have a question or need help? Fill the form below. Our team will
          respond within 24 working hours.
        </p>
      </div>

      {/* CONTENT */}
      <div className="support-content">
        {/* FORM */}
        <form className="support-form">
          <div className="form-row">
            <div className="form-group">
              <label>Full Name *</label>
              <input type="text" placeholder="Enter your full name" />
            </div>

            <div className="form-group">
              <label>Email Address *</label>
              <input type="email" placeholder="Enter your email" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone Number *</label>
              <input type="tel" placeholder="Enter your phone number" />
            </div>

            <div className="form-group">
              <label>Subject *</label>
              <input type="text" placeholder="Enter subject" />
            </div>
          </div>

          <div className="form-group full">
            <label>Message *</label>
            <textarea placeholder="Describe your query or issue in detail..." />
          </div>

          <button type="submit" className="submit-btn">
            Submit Request
          </button>
        </form>

        {/* RIGHT SIDE */}
        <div className="support-side">
          <div className="side-card">
            <h4>Stay Connected</h4>
            <p>
              Follow us for updates, hiring drives, success stories & more:
            </p>

            <div className="social-links">
              <span>Facebook</span>
              <span>Instagram</span>
              <span>LinkedIn</span>
              <span>YouTube</span>
            </div>
          </div>

          <div className="side-card highlight">
            <h4>Feedback & Complaints</h4>
            <p>We take your feedback seriously</p>
            <a href="mailto:grievance@zogiraa.com">
              grievance@zogiraa.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
