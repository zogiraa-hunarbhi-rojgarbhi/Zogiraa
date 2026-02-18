import "./HeroSection.css"; 
import trackAtwareHouse from "../../../assets/trackAtwareHouse.jpg"
function HeroSection() {
  return (
    <> 
    <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Grow with <span className="highlight">Zogiraa</span> : Exclusive <br/> Benefits for Suppliers</h1>
            <p>Power your business with verified buyers, assured payments, and smart tools.</p>
            <button className="cta-button">Become a Supplier</button>
          </div>
          <div className="hero-image">
            <img 
              src={trackAtwareHouse} 
              alt="Truck at warehouse" 
              className="rounded-img"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;