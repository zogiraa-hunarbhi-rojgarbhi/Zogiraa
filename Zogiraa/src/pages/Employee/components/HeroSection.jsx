import { Building, Building2, HardHat } from "lucide-react";
import "./HeroSection.css"; // Import the new CSS file

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        
        <div className="hero-text-content">
          <h1 className="hero-title">
            Hire Verified & <br />
            <span>Skilled Workers</span>
          </h1>
          <p className="hero-description">
            The modern platform connecting skilled workers with employers for
            seamless job matching
          </p>

          <div className="button-group">
            <button className="hero-btn btn-labour">
              <HardHat size={20} />
              For Labours
            </button>
            
            <button className="hero-btn btn-employer">
              <Building2 size={20} className="icon-dark" />
              For Employers
            </button>
            
            <button className="hero-btn btn-contractor">
              <Building size={20} />
              For Contractor
            </button>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="image-card">
            <img
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800"
              alt="Skilled worker"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;