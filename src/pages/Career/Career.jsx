import React from "react";
import "./Career.css";
import {
    FaRocket,
    FaChartLine,
    FaHandshake,
    FaUsers,
    FaGraduationCap,
    FaEnvelope,
    FaCheckCircle
} from "react-icons/fa";

const Career = () => {
    return (
        <div className="career-page">
            {/* Hero Section */}
            <section className="career-hero">
                <div className="container">
                    <div className="hero-content">
                        <h1>Careers at ZOGIRAA.COM</h1>
                        <p className="hero-tagline">Build Careers. Enable Livelihoods. Create Impact.</p>
                        <div className="hero-intro">
                            <p>
                                ZOGIRAA.COM is a growing digital platform connecting job seekers, workers, artisans, sellers, employers, and partners across India. We work at the intersection of employment, e-commerce, skills, and digital inclusion to create sustainable livelihood opportunities.
                            </p>
                            <p>
                                If you are passionate about people, technology, and nation-building, Zogiraa offers a meaningful place to grow your career.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Work With Us */}
            <section className="why-zogiraa">
                <div className="container">
                    <div className="section-header">
                        <h2>Why Work with Zogiraa?</h2>
                        <div className="header-line"></div>
                    </div>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <FaRocket className="benefit-icon" />
                            <h3>Scale & Impact</h3>
                            <p>Opportunity to work on a large-scale employment and livelihood platform.</p>
                        </div>
                        <div className="benefit-card">
                            <FaChartLine className="benefit-icon" />
                            <h3>Growth</h3>
                            <p>Growth with a scaling, impact-driven organization.</p>
                        </div>
                        <div className="benefit-card">
                            <FaUsers className="benefit-icon" />
                            <h3>Exposure</h3>
                            <p>Exposure to jobs, MSMEs, artisans, e-commerce, and government projects.</p>
                        </div>
                        <div className="benefit-card">
                            <FaGraduationCap className="benefit-icon" />
                            <h3>Opportunities</h3>
                            <p>Performance-based growth and leadership opportunities.</p>
                        </div>
                        <div className="benefit-card">
                            <FaHandshake className="benefit-icon" />
                            <h3>Culture</h3>
                            <p>Ethical, professional, and inclusive work culture.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Are Looking For */}
            <section className="looking-for">
                <div className="container">
                    <div className="looking-content">
                        <div className="looking-text">
                            <h2>Who We Are Looking For</h2>
                            <p>We welcome diversity and passion in our team.</p>
                            <ul className="profile-list">
                                <li><FaCheckCircle className="check-icon" /> Freshers and experienced professionals</li>
                                <li><FaCheckCircle className="check-icon" /> Field-level and office-based candidates</li>
                                <li><FaCheckCircle className="check-icon" /> Professionals from technology, operations, sales, and social sectors</li>
                                <li><FaCheckCircle className="check-icon" /> Individuals willing to learn, travel, and grow with responsibility</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Internship & Freelance */}
            <section className="internship-freelance">
                <div className="container">
                    <div className="internship-grid">
                        <div className="intern-card">
                            <h2>Internship Opportunities</h2>
                            <p>Zogiraa offers student internships across various departments including tech, marketing, and operations.</p>
                        </div>
                        <div className="intern-card">
                            <h2>Freelance Opportunities</h2>
                            <p>We offer freelance roles in design, technology, training, and field operations.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Equal Opportunity */}
            <section className="equal-opportunity">
                <div className="container">
                    <div className="eo-box">
                        <h3>Equal Opportunity Employer</h3>
                        <p>
                            ZOGIRAA.COM is an equal opportunity employer. We are committed to diversity, inclusion, ethical practices, and a respectful work environment.
                        </p>
                    </div>
                </div>
            </section>

            {/* How to Apply */}
            <section className="how-to-apply">
                <div className="container">
                    <div className="apply-card">
                        <FaEnvelope className="apply-icon" />
                        <h2>How to Apply</h2>
                        <p>Please send your CV with the subject line:</p>
                        <div className="subject-line">
                            <span>Position Name – Preferred Location</span>
                        </div>
                        <a href="mailto:careers@zogiraa.com" className="email-link">careers@zogiraa.com</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Career;
