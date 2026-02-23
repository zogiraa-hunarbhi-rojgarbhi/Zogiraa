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
          <button
            className="post-job-btn"
            onClick={() => onLoginClick('employer')}
          >
            Post a Job
          </button>

          {user ? (
            <div className="user-nav">
              <span className="user-role">
                {user.role}
              </span>
              <button
                className="dashboard-link"
                onClick={() => {
                  const url = user.role === 'worker' ?
                    (window.location.hostname === 'localhost' ? 'http://localhost:5174' : 'https://worker.zogiraa.com') :
                    (window.location.hostname === 'localhost' ? 'http://localhost:5176' : 'https://employer.zogiraa.com');
                  const token = localStorage.getItem('token');
                  window.open(`${url}?token=${token}`, '_blank');
                }}
              >
                Go to Dashboard
              </button>
              <button className="sign-out-btn" onClick={logout}>Sign Out</button>
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

