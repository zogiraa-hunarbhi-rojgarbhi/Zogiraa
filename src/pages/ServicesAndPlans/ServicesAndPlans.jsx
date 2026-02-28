import React from 'react';
import './ServicesAndPlans.css';
import { FaBriefcase, FaBuilding, FaShoppingCart, FaChartLine, FaGraduationCap, FaLandmark, FaCheckCircle, FaCheck } from 'react-icons/fa';

const ServicesAndPlans = () => {
    const services = [
        {
            title: "1. Job Placement & Employment Services",
            icon: <FaBriefcase className="service-icon" />,
            points: [
                "Blue-collar and skilled worker placement",
                "Factory, warehouse, retail & service sector hiring",
                "Job seeker profiling & verification",
                "Employer hiring dashboard & support"
            ],
            for: "Job Seekers | Employers"
        },
        {
            title: "2. Employer Hiring & Recruitment Solutions",
            icon: <FaBuilding className="service-icon" />,
            points: [
                "Employer onboarding & KYC",
                "Job posting & candidate shortlisting",
                "Interview coordination & hiring support",
                "Bulk hiring & contract workforce solutions"
            ],
            for: "Companies | MSMEs | Factories | Institutions"
        },
        {
            title: "3. E-Commerce Marketplace Services",
            icon: <FaShoppingCart className="service-icon" />,
            points: [
                "Seller onboarding",
                "Product listing & catalog support",
                "Order management & returns support",
                "Logistics & delivery coordination"
            ],
            for: "Artisans | SHGs | MSMEs | Sellers"
        },
        {
            title: "4. Seller Growth & Business Support",
            icon: <FaChartLine className="service-icon" />,
            points: [
                "Pricing & commission guidance",
                "Branding & product presentation support",
                "Payment, wallet & payout management",
                "Digital selling & e-commerce training"
            ],
            for: "Sellers | Home-based Entrepreneurs"
        },
        {
            title: "5. Skill Development & Training",
            icon: <FaGraduationCap className="service-icon" />,
            points: [
                "Skill assessment & upskilling programs",
                "Digital literacy & financial literacy training",
                "E-commerce & business training",
                "Government scheme–linked skill programs"
            ],
            for: "Workers | Artisans | Youth | Women"
        },
        {
            title: "6. Government, CSR & Institutional Services",
            icon: <FaLandmark className="service-icon" />,
            points: [
                "Employment-linked training projects",
                "CSR skill & livelihood programs",
                "Government scheme implementation support",
                "District & state-level project execution"
            ],
            for: "Government | CSR | NGOs | Institutions"
        }
    ];

    return (
        <div className="services-plans-page">
            {/* Hero Section */}
            <section className="services-hero">
                <div className="container">
                    <h1>Services & Plans – ZOGIRAA.COM</h1>
                    <h2>One Platform. Jobs, Livelihoods & Business Growth.</h2>
                    <p>
                        ZOGIRAA.COM provides integrated digital services for job seekers, workers, sellers, employers, and partners, enabling employment, income generation, and business growth across India.
                    </p>
                </div>
            </section>

            {/* Core Services Section */}
            <section className="core-services container">
                <h2 className="section-title">Our Core Services</h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className="service-card" key={index}>
                            <div className="service-header">
                                {service.icon}
                                <h3>{service.title}</h3>
                            </div>
                            <ul className="service-points">
                                {service.points.map((point, i) => (
                                    <li key={i}><FaCheckCircle className="check-icon" /> {point}</li>
                                ))}
                            </ul>
                            <div className="service-for">
                                <strong>For:</strong> {service.for}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Plans Section */}
            <section className="plans-section">
                <div className="container">
                    <h2 className="section-title">Plans & Pricing (Indicative)</h2>

                    <div className="plans-category">
                        <h3>Job Seeker Plans</h3>
                        <div className="plans-grid">
                            <div className="plan-card">
                                <h4>Free Plan</h4>
                                <ul>
                                    <li><FaCheck className="check" /> Job discovery & basic profile</li>
                                    <li><FaCheck className="check" /> Limited applications</li>
                                </ul>
                            </div>
                            <div className="plan-card premium">
                                <h4>Premium Plan</h4>
                                <ul>
                                    <li><FaCheck className="check" /> Priority job matching</li>
                                    <li><FaCheck className="check" /> Dedicated support & faster placement</li>
                                    <li><FaCheck className="check" /> Skill & profile guidance</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="plans-category">
                        <h3>Employer Plans</h3>
                        <div className="plans-grid three-col">
                            <div className="plan-card">
                                <h4>Basic Hiring Plan</h4>
                                <ul>
                                    <li><FaCheck className="check" /> Limited job postings</li>
                                    <li><FaCheck className="check" /> Standard candidate access</li>
                                </ul>
                            </div>
                            <div className="plan-card premium">
                                <h4>Growth Hiring Plan</h4>
                                <ul>
                                    <li><FaCheck className="check" /> Multiple job postings</li>
                                    <li><FaCheck className="check" /> Verified candidates</li>
                                    <li><FaCheck className="check" /> Hiring support & coordination</li>
                                </ul>
                            </div>
                            <div className="plan-card enterprise">
                                <h4>Enterprise / Bulk Hiring</h4>
                                <ul>
                                    <li><FaCheck className="check" /> High-volume hiring</li>
                                    <li><FaCheck className="check" /> Dedicated account manager</li>
                                    <li><FaCheck className="check" /> Custom solutions</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="plans-category">
                        <h3>Seller / Artisan Plans</h3>
                        <div className="plans-grid three-col">
                            <div className="plan-card">
                                <h4>Starter Plan</h4>
                                <ul>
                                    <li><FaCheck className="check" /> Seller onboarding</li>
                                    <li><FaCheck className="check" /> Limited product listings</li>
                                </ul>
                            </div>
                            <div className="plan-card premium">
                                <h4>Growth Seller Plan</h4>
                                <ul>
                                    <li><FaCheck className="check" /> Higher listings</li>
                                    <li><FaCheck className="check" /> Marketing & visibility support</li>
                                    <li><FaCheck className="check" /> Faster payouts</li>
                                </ul>
                            </div>
                            <div className="plan-card enterprise">
                                <h4>Business / Export Plan</h4>
                                <ul>
                                    <li><FaCheck className="check" /> Premium visibility</li>
                                    <li><FaCheck className="check" /> Bulk & B2B orders</li>
                                    <li><FaCheck className="check" /> Dedicated seller support</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="plans-category partner-category">
                        <div className="partner-content">
                            <h3>Partner & Institutional Plans</h3>
                            <p>Custom plans available for:</p>
                            <ul>
                                <li><FaCheck className="check" /> Banks & NBFCs</li>
                                <li><FaCheck className="check" /> Insurance partners</li>
                                <li><FaCheck className="check" /> Logistics & service vendors</li>
                                <li><FaCheck className="check" /> Training institutions & CSR partners</li>
                                <li><FaCheck className="check" /> Computer shops</li>
                            </ul>
                            <div className="partner-contact">
                                Contact: <a href="mailto:partner@zogiraa.com">partner@zogiraa.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="why-choose-section container">
                <h2 className="section-title">Why Choose Zogiraa?</h2>
                <div className="why-grid">
                    <div className="why-card">
                        <div className="why-icon">🔄</div>
                        <p>Integrated jobs + e-commerce + skills platform</p>
                    </div>
                    <div className="why-card">
                        <div className="why-icon">🤝</div>
                        <p>Strong focus on livelihood creation & trust</p>
                    </div>
                    <div className="why-card">
                        <div className="why-icon">📱</div>
                        <p>Digital + field-level support</p>
                    </div>
                    <div className="why-card">
                        <div className="why-icon">🇮🇳</div>
                        <p>PAN-India reach with local execution</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesAndPlans;
