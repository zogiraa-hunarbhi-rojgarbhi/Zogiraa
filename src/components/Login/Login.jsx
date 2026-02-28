import { useState, useEffect } from 'react';
import { ChevronDown, Loader2 } from 'lucide-react';
import { sendOTP, verifyOTP } from '../../utils/api';
import { setSharedCookie } from '../../utils/cookieUtils';
import './Login.css';

const Login = ({ isOpen, onClose, initialRole = '' }) => {
  const [step, setStep] = useState('phone'); // phone, otp, redirect
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [role, setRole] = useState(initialRole);

  useEffect(() => {
    if (isOpen) {
      setRole(initialRole);
      setStep('phone');
      setError('');
      setPhone('');
      setOtp('');
    }
  }, [isOpen, initialRole]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [userRole, setUserRole] = useState('');

  if (!isOpen) return null;

  const handleSendOTP = async (e) => {
    e.preventDefault();
    if (phone.length !== 10) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }
    setError('');
    setLoading(true);
    try {
      await sendOTP(phone, role, 'login');
      setStep('otp');
    } catch (err) {
      if (err.message.includes('Account not found')) {
        if (!role) {
          setError('Account not found. Please select your role to sign up.');
        } else {
          try {
            await sendOTP(phone, role, 'signup');
            setStep('otp');
          } catch (signupErr) {
            setError(signupErr.message);
          }
        }
      } else {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      setError('Please enter a valid 6-digit OTP');
      return;
    }
    setError('');
    setLoading(true);
    try {
      const data = await verifyOTP(phone, otp, role, role ? 'signup' : 'login');
      setSharedCookie('zogiraa_token', data.token);
      localStorage.setItem('token', data.token);
      localStorage.setItem('userRole', data.role);
      setUserRole(data.role);

      if (data.role === 'worker' || data.role === 'employer') {
        setStep('redirect');
      } else {
        onClose();
        window.location.reload();
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRedirect = (confirm) => {
    if (confirm) {
      let url = '';
      if (userRole === 'worker') {
        url = window.location.hostname === 'localhost'
          ? 'http://localhost:5174'
          : 'https://worker.zogiraa.com';
      } else if (userRole === 'employer') {
        url = window.location.hostname === 'localhost'
          ? 'http://localhost:5176'
          : 'https://employer.zogiraa.com';
      }
      if (url) {
        // For localhost development, pass token in URL to ensure login persists across ports
        const token = localStorage.getItem('token');
        const redirectUrl = `${url}?token=${token}`;

        window.open(redirectUrl, '_blank');
        onClose();
        window.location.reload();
      }
    } else {
      onClose();
      window.location.reload();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card">

        <button onClick={onClose} className="close-btn">✕</button>

        <div className="modal-header">
          <h2>{step === 'redirect' ? 'Welcome Back!' : 'Login to Continue'}</h2>
          <p>
            {step === 'phone' && 'Enter your mobile number to log in or sign up'}
            {step === 'otp' && `Enter the OTP sent to +91 ${phone}`}
            {step === 'redirect' && `You are logged in as a ${userRole}.`}
          </p>
        </div>

        {error && <div className="error-message" style={{ color: 'red', marginBottom: '10px', textAlign: 'center' }}>{error}</div>}

        {step === 'phone' && (
          <form className="login-form" onSubmit={handleSendOTP}>
            <div className="role-selection" style={{ marginBottom: '20px' }}>
              <label className="input-label" style={{ display: 'block', marginBottom: '8px' }}>I am a:</label>
              <div className="role-options" style={{ display: 'flex', gap: '10px' }}>
                <button
                  type="button"
                  className={`role-btn ${role === 'worker' ? 'active' : ''}`}
                  onClick={() => setRole('worker')}
                  style={{
                    flex: 1,
                    padding: '10px',
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    background: role === 'worker' ? '#0070f3' : '#fff',
                    color: role === 'worker' ? 'var(--text-white)' : 'var(--text-dark)',
                    cursor: 'pointer'
                  }}
                >
                  Worker / Labour
                </button>
                <button
                  type="button"
                  className={`role-btn ${role === 'employer' ? 'active' : ''}`}
                  onClick={() => setRole('employer')}
                  style={{
                    flex: 1,
                    padding: '10px',
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    background: role === 'employer' ? '#0070f3' : '#fff',
                    color: role === 'employer' ? 'var(--text-white)' : 'var(--text-dark)',
                    cursor: 'pointer'
                  }}
                >
                  Employer
                </button>
              </div>
            </div>

            <div>
              <label className="input-label">Mobile Number</label>
              <div className="phone-input-container">
                <div className="country-code">
                  <span className="font-medium">+91</span>
                  <ChevronDown size={16} />
                </div>
                <input
                  type="tel"
                  maxLength="10"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  placeholder="Enter mobile number"
                  className="main-input"
                  required
                />
              </div>
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? <Loader2 className="animate-spin mx-auto" size={20} /> : 'Send OTP'}
            </button>
          </form>
        )}

        {step === 'otp' && (
          <form className="login-form" onSubmit={handleVerifyOTP}>
            <div>
              <label className="input-label">Enter 6-Digit OTP</label>
              <input
                type="text"
                maxLength="6"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                placeholder="000000"
                className="main-input text-center tracking-[0.5em] text-xl"
                required
              />
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? <Loader2 className="animate-spin mx-auto" size={20} /> : 'Verify OTP'}
            </button>
            <button type="button" className="change-phone-btn" onClick={() => setStep('phone')}>
              ← Change Phone Number
            </button>
          </form>
        )}

        {step === 'redirect' && (
          <div className="redirect-options">
            <p className="redirect-question">Would you like to go to your dashboard?</p>
            <div className="redirect-actions">
              <button onClick={() => handleRedirect(true)} className="redirect-go-btn">
                Go to Dashboard
              </button>
              <button onClick={() => handleRedirect(false)} className="stay-btn">
                Stay Here
              </button>
            </div>
          </div>
        )}

        {step !== 'redirect' && (
          <div className="modal-footer">
            <button onClick={onClose} className="skip-btn">
              Skip for Now
            </button>

            <p className="terms-text">
              By continuing, you agree to our <span className="link-blue">Terms</span> and <span className="link-blue">Privacy Policy</span>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;