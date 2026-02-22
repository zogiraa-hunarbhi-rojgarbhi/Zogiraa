import React, { useState } from 'react';
// Ensure this path matches where you saved your Login component
import Login from '../../../components/Login/Login'; 
import './HeaderWorker.css';

const HeaderWorker = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Login
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      
      <header className="hw-header">
        <div className="hw-container">
          <div className="hw-nav">
            {/* Using a wrapper to keep buttons grouped on the right */}
            <div className="hw-button-group">
              <button
                onClick={() => setIsModalOpen(true)}
                className="hw-btn-login"
              >
                Login
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="hw-btn-signup"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderWorker;