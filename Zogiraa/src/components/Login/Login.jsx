import { ChevronDown } from 'lucide-react';
import './login.css'; 

const Login = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        
        <button onClick={onClose} className="close-btn">✕</button>

        <div className="modal-header">
          <h2>Login to Continue</h2>
          <p>Enter your mobile number to log in or sign up</p>
        </div>

        <form className="login-form">
          <div>
            <label className="input-label">Mobile Number</label>
            <div className="phone-input-container">
              <div className="country-code">
                <span className="font-medium">+91</span>
                <ChevronDown size={16} />
              </div>
              <input 
                type="tel" 
                placeholder="Enter mobile number" 
                className="main-input"
              />
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Send OTP
          </button>
        </form>

        <div className="modal-footer">
          <button onClick={onClose} className="skip-btn">
            Skip for Now
          </button>
          
          <p className="terms-text">
            By continuing, you agree to our <span className="link-blue">Terms</span> and <span className="link-blue">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;