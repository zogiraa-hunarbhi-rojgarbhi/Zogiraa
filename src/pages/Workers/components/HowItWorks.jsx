import { UserPlus, Search, Handshake } from "lucide-react";
import "./HowItWorks.css"; 

function HowItWorks() {
  return (
    <section className="hiw-section">
      <div className="hiw-container">
        <div className="hiw-header">
          <h2>How It Works</h2>
          <p>Simple steps to connect workers and employers</p>
        </div>

        <div className="hiw-grid">

          <div className="hiw-step">
            <div className="hiw-icon-box icon-blue">
              <UserPlus size={32} />
            </div>
            <h3>1. Create Profile</h3>
            <p>Sign up and create your detailed profile with skills and experience</p>
          </div>

        
          <div className="hiw-step">
            <div className="hiw-icon-box icon-yellow">
              <Search size={32} />
            </div>
            <h3>2. Browse & Match</h3>
            <p>Find the perfect job opportunities or skilled workers</p>
          </div>

        
          <div className="hiw-step">
            <div className="hiw-icon-box icon-green">
              <Handshake size={32} />
            </div>
            <h3>3. Get Connected</h3>
            <p>Connect directly and start working together safely</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;