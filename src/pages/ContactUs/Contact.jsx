import { useState } from "react";
import "./Contact.css";
import supportImg from "../../assets/support_zogira.png";
import { FaEnvelope, FaTimes } from "react-icons/fa";

// ✅ import the support form component
import QuickSupportForm from "./components/QuickSupportForm";

const emailDirectory = [
  { email: "info@zogiraa.com", label: "General Information & Inquiries" },
  { email: "support@zogiraa.com", label: "Customer Support (Job Seekers, Sellers, Employers)" },
  { email: "career@zogiraa.com", label: "Jobs, Internal Hiring, Internships" },
  { email: "partner@zogiraa.com", label: "Business & Ecosystem Partnerships" },
  { email: "employer@zogiraa.com", label: "Employer Onboarding & Hiring Support" },
  { email: "worker@zogiraa.com", label: "Job Seeker Support & Worker Onboarding" },
  { email: "placement@zogiraa.com", label: "Placement Coordination & Tracking" },
  { email: "seller@zogiraa.com", label: "Seller/Artisan Onboarding" },
  { email: "payments@zogiraa.com", label: "Payment Issues & Failures" },
  { email: "payouts@zogiraa.com", label: "Seller / Worker Payouts" },
  { email: "orders@zogiraa.com", label: "Order-Related Queries" },
  { email: "returns@zogiraa.com", label: "Returns, Cancellation & Disputes" },
  { email: "catalog@zogiraa.com", label: "Product Listing & Catalog Issues" },
  { email: "training@zogiraa.com", label: "Trainers & Skill Partners" },
  { email: "grievance@zogiraa.com", label: "Escalations & Grievances" },
  { email: "admin@zogiraa.com", label: "Administration" },
  { email: "ceo@zogiraa.com", label: "CEO Office" },
];

export default function Contact() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  return (
    <div className="contact-page">
      {/* ================= HERO SECTION ================= */}
      <section className="contact-hero">
        <div className="contact-hero-left">
          <h1>
            Need Assistance? <br />
            <span>We're Here for You</span> <br />
            Contact Us
          </h1>

          <p>
            We're here to help you with hiring, job support, partnerships,
            or general queries. Choose how you'd like to connect.
          </p>

          <div className="contact-actions">
            <button className="btn-primary">Get Instant Help</button>
            <button
              className="btn-email-directory"
              onClick={() => setIsEmailModalOpen(true)}
            >
              <FaEnvelope /> View Email Directory
            </button>
          </div>
        </div>

        <div className="contact-hero-right">
          <img src={supportImg} alt="Support Agent" />
        </div>
      </section>

      {/* ================= INFO CARDS ================= */}
      <section className="contact-cards">
        <div className="contact-card">
          <h3>Registered Office</h3>
          <p><strong>Zomira World Pvt Ltd</strong></p>
          <p>
            C/O. Manoj Kr Shrivastava, Shanti Path <br />
            Saristabad PS, Gardanibagh, Phulwari, <br />
            Patna- 800001, Bihar
          </p>
          <p className="timing">
            Office Hours: <br />
            Monday to Saturday: 10 AM – 6 PM <br />
            <span>24/7 Open</span>
          </p>
        </div>

        <div className="contact-card">
          <h3>Corporate HQ (UP)</h3>
          <p><strong>Address:</strong></p>
          <p>
            2nd Floor, H-54, Sector-9, Noida, <br />
            G.B. Nagar UP-201301
          </p>
          <p className="timing">
            Office Hours: <br />
            Monday to Saturday: 10 AM – 6 PM <br />
            <span>24/7 Open</span>
          </p>
        </div>

        <div className="contact-card">
          <h3>Bihar Branch Office</h3>
          <p><strong>Address:</strong></p>
          <p>Pitamaheshwar Ghat, Gaya-823001, Bihar</p>
          <p className="timing">
            Office Hours: <br />
            Monday to Saturday: 10 AM – 6 PM <br />
            <span>24/7 Open</span>
          </p>
        </div>

        <div className="contact-card">
          <h3>Call or WhatsApp</h3>
          <p>
            Helpline Employer: <br />
            <strong>+91-7669933552</strong>
          </p>

          <a
            href="https://wa.me/917669933552"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-btn"
          >
            WhatsApp Chat
          </a>

          <p className="timing">
            Availability: <br />
            Monday to Saturday: 9 AM – 6 PM
          </p>
        </div>
      </section>

      {/* ================= EMAIL DIRECTORY MODAL ================= */}
      {isEmailModalOpen && (
        <div className="email-modal-overlay" onClick={() => setIsEmailModalOpen(false)}>
          <div className="email-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setIsEmailModalOpen(false)}>
              <FaTimes />
            </button>
            <h2>Departmental Email Directory</h2>
            <p className="modal-sub">Contact the right department for faster resolution.</p>
            <div className="email-list-container">
              {emailDirectory.map((item, index) => (
                <div className="email-item" key={index}>
                  <div className="email-address">
                    <a href={`mailto:${item.email}`}>{item.email}</a>
                  </div>
                  <div className="email-label">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================= QUICK SUPPORT FORM ================= */}
      <QuickSupportForm />
    </div>
  );
}
