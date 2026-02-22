import { UserPlus, Handshake, Search } from "lucide-react";
import "./HowitWork.css"; // Import the separate CSS file

function HowitWork() {
  return (
    <section className="how-it-works">
      <div className="how-container">
        <div className="how-header">
          <h2 className="how-title">How It Works</h2>
          <p className="how-subtitle">
            Simple steps to connect workers and employers
          </p>
        </div>

        <div className="steps-grid">
          {/* Step 1 */}
          <div className="step-item">
            <div className="icon-wrapper icon-blue">
              <UserPlus size={32} />
            </div>
            <h3 className="step-title">1. Create Profile</h3>
            <p className="step-description">
              Sign up and create your detailed profile with skills and experience
            </p>
          </div>

          {/* Step 2 */}
          <div className="step-item">
            <div className="icon-wrapper icon-yellow">
              <Search size={32} />
            </div>
            <h3 className="step-title">2. Browse & Match</h3>
            <p className="step-description">
              Find the perfect job opportunities or skilled workers
            </p>
          </div>

          {/* Step 3 */}
          <div className="step-item">
            <div className="icon-wrapper icon-green">
              <Handshake size={32} />
            </div>
            <h3 className="step-title">3. Get Connected</h3>
            <p className="step-description">
              Connect directly and start working together safely
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowitWork;