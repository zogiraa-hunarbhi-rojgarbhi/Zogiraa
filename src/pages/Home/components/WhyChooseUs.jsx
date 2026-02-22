import React from "react";
import "./WhyChooseUs.css";
import icon01  from "../../../assets/why-Icon01.png";
import icon02 from   "../../../assets/why-Icon02.png";
import icon03  from "../../../assets/why-Icon03.png";
import icon04 from  "../../../assets/why-Icon04.png";
const WhyChooseUs = () => {
  const data = [
    {
      title: "Verified Profiles",
      desc: "All workers are background verified and skill-tested for your safety",
      icon: icon01,
      bg: "blue",
    },
    {
      title: "Quick Hiring",
      desc: "Find and hire workers in minutes with our instant matching system",
      icon: icon02,
      bg: "orange",
    },
    {
      title: "Attendance Logs",
      desc: "Track worker attendance and performance with detailed logs",
      icon: icon03,
      bg: "green",
    },
    {
      title: "Secure Payments",
      desc: "Safe and secure payment processing with multiple payment options",
      icon: icon04,
      bg: "purple",
    },
  ];

  return (
    <section className="whyChooses">
      <h1 className="whyTitle">Why Choose Us</h1>
      <p className="whySubTitle">Everything you need to hire the right people</p>

      <div className="whyCards">
        {data.map((item, index) => (
          <div key={index} className="whyCard">
            <div className={`whyIcon ${item.bg}`}>
                 <img src={item.icon} alt={item.title} className="iconImg" />
            </div>
            <h3 className="cardTitle">{item.title}</h3>
            <p className="cardDesc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
