import React, { useState, useEffect } from 'react';
import './Popup.css';

const Popup = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Show popup shortly after component mounts
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    if (!isOpen) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="popup-close" onClick={() => setIsOpen(false)} aria-label="Close">
                    &times;
                </button>
                <div className="popup-body">
                    <h2>Launching Soon! 🚀</h2>
                    <p>Onboarding of workers and employers are in process...</p>
                </div>
            </div>
        </div>
    );
};

export default Popup;
