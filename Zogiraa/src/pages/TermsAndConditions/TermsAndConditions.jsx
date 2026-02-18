import React, { useState } from 'react';
import './TermsAndConditions.css';
import handshakeImg from '../../assets/handshake.png';

const TermsAndConditions = () => {
  const [agreed, setAgreed] = useState(false);

  const handleDownload = () => {
   
    console.log("Download Terms (PDF)");
    alert("Download functionality to be implemented");
  };

  const handleContinue = () => {
    if (agreed) {
      console.log("Agreed and Continue");
      // Navigate to next page or perform action
    } else {
      alert("Please agree to the terms and conditions to continue.");
    }
  };

  return (
    <div className="terms-container">
      {/* Header Section */}
      <header className="terms-header">
        <div className="header-content">
          <h1>Employer Terms <br /> & <span>Conditions</span></h1>
          <p>Read and agree to our policies for a safe and trusted hiring experience.</p>
          <button className="download-btn" onClick={handleDownload}>
            <span className="icon">⬇</span> Download Terms (PDF)
          </button>
        </div>
        <div className="header-image">
           <img src={handshakeImg} alt="Handshake" className="handshake-img" />
        </div>
      </header>

      {/* Main Content Section */}
      <main className="terms-main">
        <h2 className="section-title">Terms & Conditions</h2>
        <p className="section-subtitle">Please read through all terms carefully. These conditions ensure a fair and secure experience for all parties.</p>

        <div className="terms-list">
          {/* Term Item 1 */}
          <div className="term-item">
            <div className="term-icon shield-icon">🛡️</div>
            <div className="term-text">
              <h3>Fair Conduct & Ethical Hiring</h3>
              <p>Employers must not assign unlisted tasks or force extra hours. All job requirements must be clearly communicated upfront, and workers should only perform agreed-upon duties within reasonable timeframes.</p>
            </div>
          </div>

          {/* Term Item 2 */}
          <div className="term-item">
            <div className="term-icon calendar-icon">📅</div>
            <div className="term-text">
              <h3>Cancellations & Replacements</h3>
              <p>Repeated cancellations affect your profile health. Employers should provide reasonable notice for cancellations and maintain professional standards to ensure platform reliability.</p>
            </div>
          </div>

           {/* Term Item 3 */}
           <div className="term-item">
            <div className="term-icon gavel-icon">🔨</div>
            <div className="term-text">
              <h3>Dispute Resolution</h3>
              <p>Report worker issues within 48 hours for mediation. Our support team will investigate and resolve conflicts fairly, ensuring both parties receive appropriate assistance.</p>
            </div>
          </div>

           {/* Term Item 4 */}
           <div className="term-item">
            <div className="term-icon user-icon">👤</div>
            <div className="term-text">
              <h3>Data Privacy</h3>
              <p>Employer must protect worker details. Personal information shared during hiring must be kept confidential and used only for legitimate business purposes.</p>
            </div>
          </div>

           {/* Term Item 5 */}
           <div className="term-item">
            <div className="term-icon scale-icon">⚖️</div>
            <div className="term-text">
              <h3>Compliance with Labour Laws</h3>
              <p>Follow state/national laws on wages and conditions. All employment practices must comply with local regulations and fair labor standards.</p>
            </div>
          </div>

           {/* Term Item 6 */}
           <div className="term-item">
            <div className="term-icon handshake-icon">🤝</div>
            <div className="term-text">
              <h3>Accountability</h3>
              <p>Employers agree to follow Zogiraa rules. By using our platform, you commit to maintaining professional standards and adhering to all platform policies.</p>
            </div>
          </div>
          
           {/* Term Item 7: Payment Obligations */}
           <div className="term-item">
            <div className="term-icon wallet-icon">💳</div>
            <div className="term-text">
              <h3>Payment Obligations</h3>
              <p>Payments must be made through Zogiraa for security & tracking. Direct payments outside the platform are prohibited to ensure transparency and protect both parties from fraud.</p>
            </div>
          </div>

        </div>

        {/* Footer / Agreement Section */}
        <div className="agreement-section">
            <div className="checkbox-container">
                <input 
                    type="checkbox" 
                    id="agree-checkbox" 
                    checked={agreed} 
                    onChange={(e) => setAgreed(e.target.checked)} 
                />
                <label htmlFor="agree-checkbox">I have read and agree to the above Terms & Conditions</label>
            </div>
            
            <button className={`continue-btn ${agreed ? 'active' : ''}`} onClick={handleContinue} disabled={!agreed}>
                ✔ Agree & Continue
            </button>
        </div>

      </main>
    </div>
  );
};

export default TermsAndConditions;
