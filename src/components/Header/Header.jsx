import React from "react";
import { FiSearch, FiMic } from "react-icons/fi";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/logo.jpeg";
import "./Header.css";

const HeaderSearch = ({ onLoginClick }) => {
  const { user, logout } = useAuth();

  return (
    <header className="header">
      <div className="header-inner">
        <img src={logo} alt="Zogiraa Logo" className="logo-img" />

        <div className="search-box">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search........" />
          <FiMic className="mic-icon" />
        </div>

        <div className="header-actions">
          <span className="post-job">Post a Job</span>
          {user ? (
            <div className="user-nav">
              <span className="user-role uppercase text-xs font-bold bg-blue-100 text-blue-600 px-2 py-1 rounded">
                {user.role}
              </span>
              <button
                className="dashboard-link"
                style={{
                  marginLeft: '12px',
                  background: '#10b981', // green-500
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center'
                }}
                onClick={() => {
                  const url = user.role === 'worker' ?
                    (window.location.hostname === 'localhost' ? 'http://localhost:5174' : 'http://workers.zogiraa.com') :
                    (window.location.hostname === 'localhost' ? 'http://localhost:5176' : 'http://employer.zogiraa.com');
                  const token = localStorage.getItem('token');
                  window.open(`${url}?token=${token}`, '_blank');
                }}
              >
                Go to Dashboard
              </button>
              <button className="sign-in ml-2" onClick={logout}>Sign Out</button>
            </div>
          ) : (
            <button className="sign-in" onClick={onLoginClick}>Sign In</button>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderSearch;

