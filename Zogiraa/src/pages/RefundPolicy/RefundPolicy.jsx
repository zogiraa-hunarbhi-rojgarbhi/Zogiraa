import React, { useState } from 'react';
import './RefundPolicy.css';
import { FaExchangeAlt } from "react-icons/fa"; 

const RefundPolicy = () => {
  const [agreed, setAgreed] = useState(false);

  const handleDownload = () => {
    console.log("Download Refund Policy (PDF)");
    alert("Download functionality to be implemented");
  };

  const handleContinue = () => {
    if (agreed) {
      console.log("Agreed and Continue");
      // Navigate to next page or perform action
    } else {
      alert("Please agree to the refund policy to continue.");
    }
  };

  return (
    <div className="refund-container">
      {/* Header Section */}
      <header className="refund-header">
        <div className="header-content">
          <h1>Refund & <br /> <span>Cancellation</span></h1>
          <p>Transparent policies ensuring fair treatment for all cancellations and refunds.</p>
          <button className="download-btn" onClick={handleDownload}>
            <span className="icon">⬇</span> Download Policy (PDF)
          </button>
        </div>
        <div className="header-image">
           <FaExchangeAlt className="header-large-icon" />
        </div>
      </header>

      {/* Main Content Section */}
      <main className="refund-main">
        <h2 className="section-title">Refund & Cancellation Policy</h2>
        <p className="section-subtitle">Understanding our cancellation and refund process ensures a smooth experience for both employers and workers.</p>

        <div className="refund-list">
          {/* Item 1 */}
          <div className="refund-item">
            <div className="refund-icon">⏳</div>
            <div className="refund-text">
              <h3>Cancellation Window</h3>
              <p>Employers can cancel a booking without penalty up to 24 hours before the scheduled start time. Cancellations made within 24 hours may be subject to a fee.</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="refund-item">
            <div className="refund-icon">💸</div>
            <div className="refund-text">
              <h3>Refund Eligibility</h3>
              <p>Refunds are processed if the worker fails to show up or if the service provided significantly deviates from the agreed description. Disputes must be raised within 48 hours.</p>
            </div>
          </div>

           {/* Item 3 */}
           <div className="refund-item">
            <div className="refund-icon">🏧</div>
            <div className="refund-text">
              <h3>Processing Time</h3>
              <p>Approved refunds will be processed within 5-7 business days and credited back to the original payment method.</p>
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
                <label htmlFor="agree-checkbox">I have read and agree to the Refund & Cancellation Policy</label>
            </div>
            
            <button className={`continue-btn ${agreed ? 'active' : ''}`} onClick={handleContinue} disabled={!agreed}>
                ✔ Agree & Continue
            </button>
        </div>

      </main>
    </div>
  );
};

export default RefundPolicy;
