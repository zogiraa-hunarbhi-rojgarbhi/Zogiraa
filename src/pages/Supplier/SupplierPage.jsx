import React from "react";
import "./SupplierPage.css";
import { FaUserAlt, FaMapMarkerAlt, FaBriefcase, FaStar } from "react-icons/fa";

const workers = [
    {
        id: 1,
        name: "Rajesh Kumar",
        role: "Electrician",
        location: "Noida, UP",
        experience: "5 Years",
        rating: 4.8,
        status: "Available",
    },
    {
        id: 2,
        name: "Sunita Devi",
        role: "Housekeeping",
        location: "Patna, Bihar",
        experience: "3 Years",
        rating: 4.5,
        status: "In View",
    },
    {
        id: 3,
        name: "Amit Singh",
        role: "Delivery Partner",
        location: "Gaya, Bihar",
        experience: "2 Years",
        rating: 4.7,
        status: "Available",
    },
    {
        id: 4,
        name: "Pooja Sharma",
        role: "Receptionist",
        location: "Delhi, NCR",
        experience: "4 Years",
        rating: 4.9,
        status: "Available",
    },
    {
        id: 5,
        name: "Manoj Yadav",
        role: "Warehouse Staff",
        location: "Gurgaon, Haryana",
        experience: "6 Years",
        rating: 4.6,
        status: "Available",
    },
    {
        id: 6,
        name: "Maya Kumari",
        role: "Data Entry Operator",
        location: "Patna, Bihar",
        experience: "1 Year",
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
                    <p>Access our network of verified skilled workers for your business needs.</p>
                </div>
            </section>

            <div className="container">
                <div className="supplier-content">
                    <div className="supplier-header">
                        <h2>Labour Profile Previews</h2>
                        <p>Showing small info cards of available workers in our database.</p>
                    </div>

                    <div className="worker-grid">
                        {workers.map((worker) => (
                            <div className="worker-small-card" key={worker.id}>
                                <div className="worker-card-header">
                                    <div className="worker-avatar">
                                        <FaUserAlt />
                                    </div>
                                    <div className="worker-basic-info">
                                        <h3>{worker.name}</h3>
                                        <div className="worker-status">
                                            <span className={`status-dot ${worker.status.toLowerCase().replace(' ', '-')}`}></span>
                                            {worker.status}
                                        </div>
                                    </div>
                                </div>

                                <div className="worker-card-body">
                                    <div className="info-item">
                                        <FaBriefcase className="info-icon" />
                                        <span>{worker.role}</span>
                                    </div>
                                    <div className="info-item">
                                        <FaMapMarkerAlt className="info-icon" />
                                        <span>{worker.location}</span>
                                    </div>
                                    <div className="info-display">
                                        <div className="info-badge">Exp: {worker.experience}</div>
                                        <div className="info-rating">
                                            <FaStar className="star-icon" /> {worker.rating}
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
