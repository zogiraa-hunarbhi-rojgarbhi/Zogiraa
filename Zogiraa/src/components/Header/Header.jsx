import React from "react";
import { FiSearch, FiMic } from "react-icons/fi";
import logo from "../../assets/logo.jpeg";
import "./Header.css";

const HeaderSearch = () => {
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
          <button className="sign-in">Sign In</button>
        </div>
      </div>
    </header>
  );
};

export default HeaderSearch;

