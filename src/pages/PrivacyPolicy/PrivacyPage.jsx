import React, { useState } from 'react';
import './PrivacyPage.css';
import privacyImg from '../../assets/Security.png'; 

const PrivacyPage = () => {
  const [agreed, setAgreed] = useState(false);

  const handleDownload = () => {
    console.log("Download Privacy Policy (PDF)");
    alert("Download functionality to be implemented");
  };

  const handleContinue = () => {
    if (agreed) {
      console.log("Agreed and Continue");
      // Navigate to next page or perform action
    } else {
      alert("Please agree to the privacy policy to continue.");
    }
  };

  return (
    <div className="policy-container">
      {/* Header Section */}
      <header className="policy-header">
        <div className="header-content">
          <h1>Privacy <br /> <span>Policy</span></h1>
          <p>We are committed to protecting your personal information and your right to privacy.</p>
          <button className="download-btn" onClick={handleDownload}>
            <span className="icon">⬇</span> Download Policy (PDF)
          </button>
        </div>
        <div className="header-image">
           <img src={privacyImg} alt="Privacy" className="header-img" />
        </div>
      </header>

      {/* Main Content Section */}
      <main className="policy-main">
        <h2 className="section-title">Privacy Policy</h2>
        <p className="section-subtitle">Please read this privacy policy carefully as it will help you make informed decisions about sharing your personal information with us.</p>

        <div className="policy-list">
          {/* Item 1 */}
          <div className="policy-item">
            <div className="policy-icon">🔒</div>
            <div className="policy-text">
              <h3>Information Collection</h3>
              <p>We collect personal information that you voluntarily provide to us when registering at the Services expressing an interest in obtaining information about us or our products and services.</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="policy-item">
            <div className="policy-icon">📂</div>
            <div className="policy-text">
              <h3>Use of Information</h3>
              <p>We use personal information collected via our Services for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests.</p>
            </div>
          </div>

           {/* Item 3 */}
           <div className="policy-item">
            <div className="policy-icon">📢</div>
            <div className="policy-text">
              <h3>Sharing Information</h3>
              <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>
            </div>
          </div>

           {/* Item 4 */}
           <div className="policy-item">
            <div className="policy-icon">🍪</div>
            <div className="policy-text">
              <h3>Cookies and Tracking</h3>
              <p>We may use cookies and similar tracking technologies to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Policy.</p>
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
                <label htmlFor="agree-checkbox">I have read and agree to the Privacy Policy</label>
            </div>
            
            <button className={`continue-btn ${agreed ? 'active' : ''}`} onClick={handleContinue} disabled={!agreed}>
                ✔ Agree & Continue
            </button>
        </div>

      </main>
    </div>
  );
};

export default PrivacyPage;
