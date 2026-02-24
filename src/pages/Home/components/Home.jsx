import React from "react";
import "./Home.css";
import Hero from "../../../assets/Home-Page01.png";
const Home = ({ onLoginClick }) => {
  return (
    <div className="hero-wrapper">
      <div className="hero-container">
        <div className="hero-left">
          <h1>
            Find Verified Workers & <br /> Quality Tools
          </h1>
          <p>
            Hire skilled labour, rent equipment, or find your next project –
            all in one platform.
          </p>

          <div className="hero-buttons">
            <button className="btn yellow" onClick={() => onLoginClick('employer')}>Hire Now</button>
            <button className="btn blue-outline" onClick={() => onLoginClick('employer')}>Post a Job</button>
            <button className="btn blue-outline">Buy Materials & Tools</button>
          </div>

          <div className="offer-badge">
            Today’s Special: Hire Verified Cleaners – ₹399/hour
          </div>
        </div>

        <div className="hero-right">
          <img src={Hero} alt="workers" />
        </div>
      </div>
    </div>
  );
};

export default Home;
