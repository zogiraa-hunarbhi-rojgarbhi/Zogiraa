import React, { useState } from 'react';
import './PaymentPolicy.css';
import { FaCreditCard } from "react-icons/fa"; 

const PaymentPolicy = () => {
  const [agreed, setAgreed] = useState(false);

  const handleDownload = () => {
    console.log("Download Payment Policy (PDF)");
    alert("Download functionality to be implemented");
  };

  const handleContinue = () => {
    if (agreed) {
      console.log("Agreed and Continue");
      // Navigate to next page or perform action
    } else {
      alert("Please agree to the payment policy to continue.");
    }
  };

  return (
    <div className="payment-container">
      {/* Header Section */}
      <header className="payment-header">
        <div className="header-content">
          <h1>Payment <br /> <span>Policy</span></h1>
          <p>Secure and transparent payment procedures for all services on Zogiraa.</p>
          <button className="download-btn" onClick={handleDownload}>
            <span className="icon">⬇</span> Download Policy (PDF)
          </button>
        </div>
        <div className="header-image">
           <FaCreditCard className="header-large-icon" />
        </div>
      </header>

      {/* Main Content Section */}
      <main className="payment-main">
        <h2 className="section-title">Payment Policy</h2>
        <p className="section-subtitle">We ensure safe transactions. All payments must be routed through the platform to guarantee security for both parties.</p>

        <div className="payment-list">
          {/* Item 1 */}
          <div className="payment-item">
            <div className="payment-icon">💳</div>
            <div className="payment-text">
              <h3>Secure Transactions</h3>
              <p>All payments are processed through secure gateways. We do not store your credit card information directly on our servers.</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="payment-item">
            <div className="payment-icon">🕒</div>
            <div className="payment-text">
              <h3>Payment Timing</h3>
              <p>Payments are held in escrow and released to the worker typically 24 hours after the successful completion of the job.</p>
            </div>
          </div>

           {/* Item 3 */}
           <div className="payment-item">
            <div className="payment-icon">🧾</div>
            <div className="payment-text">
              <h3>Invoicing</h3>
              <p>Automated invoices are generated for every transaction and can be downloaded from your dashboard for tax and accounting purposes.</p>
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
                <label htmlFor="agree-checkbox">I have read and agree to the Payment Policy</label>
            </div>
            
            <button className={`continue-btn ${agreed ? 'active' : ''}`} onClick={handleContinue} disabled={!agreed}>
                ✔ Agree & Continue
            </button>
        </div>

      </main>
    </div>
  );
};

export default PaymentPolicy;
