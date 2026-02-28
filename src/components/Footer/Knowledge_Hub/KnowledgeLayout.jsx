import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { FaBook, FaLightbulb, FaTrophy, FaGavel } from "react-icons/fa";
import "./KnowledgeHub.css";

export default function KnowledgeLayout() {
  return (
    <div className="kh-container">
      {/* Hero Section */}
      <section className="kh-hero">
        <div className="container">
          <h1 className="kh-hero-title">Knowledge Hub</h1>
          <p className="kh-hero-subtitle">Your guide to professional growth, worker rights, and business success.</p>
        </div>
      </section>

      <div className="kh-content-wrap container">
        <nav className="kh-sidebar-nav">
          <NavLink to="/knowledge/blog" className={({ isActive }) => (isActive ? "kh-nav-item active" : "kh-nav-item")}>
            <FaBook className="kh-nav-icon" /> <span>Blog & Updates</span>
          </NavLink>
          <NavLink to="/knowledge/employers" className={({ isActive }) => (isActive ? "kh-nav-item active" : "kh-nav-item")}>
            <FaLightbulb className="kh-nav-icon" /> <span>Employer Tips</span>
          </NavLink>
          <NavLink to="/knowledge/job-readiness" className={({ isActive }) => (isActive ? "kh-nav-item active" : "kh-nav-item")}>
            <FaTrophy className="kh-nav-icon" /> <span>Job Readiness</span>
          </NavLink>
          <NavLink to="/knowledge/government-schemes" className={({ isActive }) => (isActive ? "kh-nav-item active" : "kh-nav-item")}>
            <FaGavel className="kh-nav-icon" /> <span>Rights & Schemes</span>
          </NavLink>
        </nav>

        <main className="kh-main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
