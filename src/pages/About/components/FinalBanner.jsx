import React from "react";
import triumphImg from "../../../assets/about_workers_triumph.png";

const FinalBanner = () => {
    return (
        <section className="final-banner-section">
            <div className="container">
                <div className="banner-content">
                    <div className="banner-text">
                        <h2>ZOGIRAA – Hunar Bhi, Rojgar Bhi</h2>
                        <p>
                            Together, we are building India’s most trusted workforce ecosystem.
                            Join us in our mission to bring dignity, growth, and opportunity
                            to every worker.
                        </p>
                    </div>
                    <div className="banner-image">
                        <img src={triumphImg} alt="Workers Triumph" />
                    </div>
                </div>
            </div>
            <div className="banner-footer">
                <div className="address-grid">
                    <div className="address-item">
                        <h4>Registered Address</h4>
                        <p>C/O. Manoj KR Shrivastava, Shanti Path Saristabad PS, Gardanibagh, Phulwari, Patna- 800001, Bihar</p>
                    </div>
                    <div className="address-item">
                        <h4>Corporate HQ (UP Office)</h4>
                        <p>2nd Floor, H-54, Sector-9, Noida, G.B. Nagar, UP-201301</p>
                    </div>
                    <div className="address-item">
                        <h4>Bihar Branch Office</h4>
                        <p>Pitamaheshwar Ghat, Gaya-823001, Bihar</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>Zomira World Pvt Ltd | © {new Date().getFullYear()}</p>
                </div>
            </div>
        </section>
    );
};

export default FinalBanner;
