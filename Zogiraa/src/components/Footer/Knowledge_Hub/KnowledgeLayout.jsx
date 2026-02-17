import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./KnowledgeHub.css";

export default function KnowledgeLayout() {
  return (
    <div className="kh-wrap">
      <header className="kh-header">
        <h1 className="kh-title">Knowledge Hub</h1>
        <p className="kh-sub">Articles, tips, benefits, and worker resources.</p>

        <nav className="kh-nav">
          <NavLink to="/knowledge/blog" className={({ isActive }) => (isActive ? "kh-link active" : "kh-link")}>
            Blog
          </NavLink>
          <NavLink to="/knowledge/employers" className={({ isActive }) => (isActive ? "kh-link active" : "kh-link")}>
            Tips & Benefits for Employers
          </NavLink>
          <NavLink to="/knowledge/job-readiness" className={({ isActive }) => (isActive ? "kh-link active" : "kh-link")}>
            Job Readiness Tips & Benefits
          </NavLink>
          <NavLink to="/knowledge/government-schemes" className={({ isActive }) => (isActive ? "kh-link active" : "kh-link")}>
            Government Schemes, Worker Rights
          </NavLink>
        </nav>
      </header>

      <main className="kh-main">
        <Outlet />
      </main>
    </div>
  );
}
