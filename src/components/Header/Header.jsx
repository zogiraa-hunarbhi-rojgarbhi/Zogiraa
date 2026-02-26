import React from "react";
import { FiSearch, FiMapPin } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Hamburger from "../../pages/Home/components/Hamburger";
import logo from "../../assets/logo.png";
import "./Header.css";

const categories = [
  "Construction",
  "Healthcare",
  "Education",
  "Hospitality",
  "Electronics",
  "Retail",
  "Power",
  "Logistic",
  "Agriculture",
  "IT & ITeS",
  "Banking & Finance",
  "Beauty & Wellness",
  "Automotive",
  "Textile",
  "Food Industry",
];

const HeaderSearch = ({ onLoginClick }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="header-top">
        <div className="header-top-inner">
          <div
            className="logo-section"
            onClick={() => {
              navigate("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            title="Go to Homepage"
          >
            <img src={logo} alt="Zogiraa Logo" className="logo-img" />
            <span className="logo-tagline" style={{ fontWeight: "bold" }}>
              हुनर भी, रोज़गार भी
            </span>
          </div>

          <div className="search-bar-container">
            <select className="search-category-select">
              <option value="all">All</option>
              <option value="workers">Workers</option>
              <option value="jobs">Jobs</option>
              <option value="tools">Tools</option>
            </select>
            <input
              type="text"
              className="search-input"
              placeholder="Search workers, jobs, tools..."
            />
            <button className="search-btn" aria-label="Search">
              <FiSearch />
            </button>
          </div>

          <div className="header-right">
            <div className="location-selector">
              <FiMapPin className="location-icon" />
              <div className="location-text">
                <span className="location-label">Deliver to</span>
                <span className="location-value">Update location</span>
              </div>
            </div>

            {user ? (
              <div className="user-nav">
                <span className="user-role">{user.role}</span>
                <button
                  className="dashboard-link"
                  onClick={() => {
                    const url =
                      user.role === "worker"
                        ? window.location.hostname === "localhost"
                          ? "http://localhost:5174"
                          : "https://worker.zogiraa.com"
                        : window.location.hostname === "localhost"
                          ? "http://localhost:5176"
                          : "https://employer.zogiraa.com";
                    const token = localStorage.getItem("token");
                    window.open(`${url}?token=${token}`, "_blank");
                  }}
                >
                  Go to Dashboard
                </button>
                <button className="sign-out-btn" onClick={logout}>
                  Sign Out
                </button>
              </div>
            ) : (
              <button className="sign-in-btn" onClick={onLoginClick}>
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Category Navigation Bar */}
      <nav className="header-categories">
        <div className="header-categories-inner">
          <Hamburger />
          {categories.map((cat) => (
            <a key={cat} href="#" className="category-link">
              {cat}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default HeaderSearch;
