import React from "react";
import impactImg from "../../../assets/about_happy_family.png";

const WhyZogiraaMatters = () => {
    return (
        <section className="impact-section">
            <div className="container">
                <div className="impact-content">
                    <div className="impact-text">
                        <h2>Why Zogiraa Matters</h2>
                        <p>
                            ZOGIRAA is more than just a job platform; it's a movement towards
                            social equity. We are transforming lives by providing digital
                            identity, financial inclusion, and social security to those who
                            build our nation.
                        </p>
                        <div className="impact-stats">
                            <div className="stat-item">
                                <h3>10K+</h3>
                                <p>Workers Trained</p>
                            </div>
                            <div className="stat-item">
                                <h3>500+</h3>
                                <p>MSMEs Served</p>
                            </div>
                        </div>
                    </div>
                    <div className="impact-image">
                        <img src={impactImg} alt="Happy Indian Family" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyZogiraaMatters;
