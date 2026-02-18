import {
  Users,
  CreditCard,
  Truck,
  LayoutDashboard,
  Headphones,
  ShieldCheck,
} from "lucide-react";
import "./WhyJoinZogiraa.css";

function WhyJoinZogiraa() {
  const features = [
    {
      title: "Verified Buyer Network",
      description:
        "Reach trusted construction buyers across India with pre-verified credentials.",
      icon: <Users size={28} color="#3b71ca" />,
      bgColor: "#e8f0fe",
    },
    {
      title: "Fast & Secure Payments",
      description:
        "Get paid quickly after order completion — no delays or payment hassles.",
      icon: <CreditCard size={28} color="#00a884" />,
      bgColor: "#e6fcf5",
    },
    {
      title: "Assured Delivery Support",
      description:
        "Nationwide logistics with real-time tracking for seamless deliveries.",
      icon: <Truck size={28} color="#f59e0b" />,
      bgColor: "#fff4e6",
    },
    {
      title: "Smart Seller Dashboard",
      description:
        "Manage orders, inventory, and performance analytics in one centralized place.",
      icon: <LayoutDashboard size={28} color="#4f46e5" />,
      bgColor: "#edf2ff",
    },
    {
      title: "24×7 Dedicated Support",
      description:
        "Always-on help for queries via chat, email, or call whenever you need it.",
      icon: <Headphones size={28} color="#e11d48" />,
      bgColor: "#fff0f0",
    },
    {
      title: "Transparent Platform Pricing",
      description:
        "No hidden fees — clear commissions and transparent pricing policies.",
      icon: <ShieldCheck size={28} color="#ca8a04" />,
      bgColor: "#fef9e7",
    },
  ];
  return (
    <section className="benefits-section">
      <h2 className="section-title">Why Join Zogiraa as a Supplier?</h2>
      <div className="benefits-grid">
        {features.map((item, index) => (
          <div key={index} className="benefit-card">
            <div className="icon-box" style={{ backgroundColor: item.bgColor }}>
              {item.icon}
            </div>
            <div className="benefit-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyJoinZogiraa;
