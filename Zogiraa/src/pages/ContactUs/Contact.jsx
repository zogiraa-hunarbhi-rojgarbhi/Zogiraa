import "./Contact.css";
import supportImg from "../../assets/support_zogira.png";

// ✅ import the support form component
import QuickSupportForm from "./components/QuickSupportForm";

export default function Contact() {
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
            <button className="btn-outline">Request Call Back</button>
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
          <p><strong>Zogiraa World Pvt. Ltd.</strong></p>
          <p>
            C/O Manoj KR Shrivastava, SHANTI PATH <br />
            SARISTABAD PS, Gardanibagh, Phulwari, <br />
            Patna - 800001, Bihar
          </p>
          <p className="timing">
            Office Hours: <br />
            Monday to Saturday: 10 AM – 6 PM <br />
            <span>Sunday: Closed</span>
          </p>
        </div>

        <div className="contact-card">
          <h3>Corporate Office</h3>
          <p><strong>Address:</strong> (Coming Soon)</p>
          <p className="timing">
            Office Hours: <br />
            Monday to Saturday: 10 AM – 6 PM <br />
            <span>Sunday: Closed</span>
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

      {/* ================= QUICK SUPPORT FORM ================= */}
      <QuickSupportForm />
    </div>
  );
}
