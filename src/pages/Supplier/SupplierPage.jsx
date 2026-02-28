import React from "react";
import "./SupplierPage.css";
import { FaUserAlt, FaMapMarkerAlt, FaBriefcase, FaStar } from "react-icons/fa";

const suppliers = [
    {
        id: 1,
        name: "Shree Ram Cement Agency",
        role: "Cement & Building Materials",
        location: "Noida, UP",
        experience: "15 Years",
        rating: 4.8,
        status: "Available",
    },
    {
        id: 2,
        name: "Gupta Hardware Store",
        role: "Hardware & Tools",
        location: "Patna, Bihar",
        experience: "12 Years",
        rating: 4.5,
        status: "In View",
    },
    {
        id: 3,
        name: "Kisan Paints & Chemicals",
        role: "Paints & Chemicals Supply",
        location: "Gaya, Bihar",
        experience: "8 Years",
        rating: 4.7,
        status: "Available",
    },
    {
        id: 4,
        name: "Sharma Electricals",
        role: "Electrical Fittings",
        location: "Delhi, NCR",
        experience: "20 Years",
        rating: 4.9,
        status: "Available",
    },
    {
        id: 5,
        name: "Apex Plumbing Solutions",
        role: "Plumbing & Sanitaryware",
        location: "Gurgaon, Haryana",
        experience: "10 Years",
        rating: 4.6,
        status: "Available",
    },
    {
        id: 6,
        name: "Mishra Timbers & Plywood",
        role: "Wood & Plywood Supply",
        location: "Patna, Bihar",
        experience: "18 Years",
        rating: 4.4,
        status: "Available",
    },
];

export default function SupplierPage() {
    return (
        <div className="supplier-page">
            <section className="supplier-hero">
                <div className="container">
                    <h1>Supplier Hub</h1>
                    <p>Access our network of verified tool and material suppliers for your business needs.</p>
                </div>
            </section>

            <div className="container">
                <div className="supplier-content">
                    <div className="supplier-header">
                        <h2>Supplier Profile Previews</h2>
                        <p>Showing small info cards of available tool and material sellers in our network.</p>
                    </div>

                    <div className="worker-grid">
                        {suppliers.map((supplier) => (
                            <div className="worker-small-card" key={supplier.id}>
                                <div className="worker-card-header">
                                    <div className="worker-avatar">
                                        <FaBriefcase />
                                    </div>
                                    <div className="worker-basic-info">
                                        <h3>{supplier.name}</h3>
                                        <div className="worker-status">
                                            <span className={`status-dot ${supplier.status.toLowerCase().replace(' ', '-')}`}></span>
                                            {supplier.status}
                                        </div>
                                    </div>
                                </div>

                                <div className="worker-card-body">
                                    <div className="info-item">
                                        <FaBriefcase className="info-icon" />
                                        <span>{supplier.role}</span>
                                    </div>
                                    <div className="info-item">
                                        <FaMapMarkerAlt className="info-icon" />
                                        <span>{supplier.location}</span>
                                    </div>
                                    <div className="info-display">
                                        <div className="info-badge">In Biz: {supplier.experience}</div>
                                        <div className="info-rating">
                                            <FaStar className="star-icon" /> {supplier.rating}
                                        </div>
                                    </div>
                                </div>

                                <div className="worker-card-footer">
                                    <button className="view-profile-btn">View Detailed Profile</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
