import React from "react";
import { FaUserPlus, FaGraduationCap, FaBriefcase, FaUserCheck, FaHandHoldingHeart, FaAward } from "react-icons/fa";

const WhatWeDo = () => {
    const services = [
        {
            icon: <FaUserPlus />,
            title: "Digital Onboarding",
            desc: "Instant registration and KYC-verified profiles for workers across India.",
            color: "#3575DD"
        },
        {
            icon: <FaGraduationCap />,
            title: "Skill Training",
            desc: "Certification and skill development workshops for professional excellence.",
            color: "#FBBF24"
        },
        {
            icon: <FaBriefcase />,
            title: "Job Matching",
            desc: "AI-powered job recommendations based on skill, location and experience.",
            color: "#22C55E"
        },
        {
            icon: <FaUserCheck />,
            title: "Employer Services",
            desc: "Bulk hiring and contract workforce management for MSMEs and factories.",
            color: "#3575DD"
        },
        {
            icon: <FaHandHoldingHeart />,
            title: "Financial Inclusion",
            desc: "Enabling banking, social security, and timely digital payments for workers.",
            color: "#F44545"
        },
        {
            icon: <FaAward />,
            title: "Rating System",
            desc: "Trust-building rating and feedback ecosystem for workers and employers.",
            color: "#F97316"
        }
    ];

    return (
        <section className="what-we-do">
            <div className="container">
                <div className="section-header">
                    <h2>What We Do</h2>
                    <p>We build technologies that bridge the gap between labor and opportunity.</p>
                </div>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className="service-card" key={index}>
                            <div className="service-icon" style={{ backgroundColor: `${service.color}15`, color: service.color }}>
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
