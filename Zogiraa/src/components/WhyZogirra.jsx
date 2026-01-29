import React from "react";
import "./WhyZogirra.css";
import icon01  from "../assets/zogiraa01.png";
import icon02 from   "../assets/why-Zogiraa02.png";
import icon03  from "../assets/why-Zogiraa03.png";
import icon04 from  "../assets/why-Zogiraa04.png";
const WhyZogiraa = () => {
  const data = [
    {
      title: "Verified Profiles",
      desc: "All workers undergo thorough background verification process",
      icon: icon01,
      bg: "blue",
    },
    {
      title: "Transparent Payment",
      desc: "Secure escrow system ensures  payment protection for both parties",
      icon: icon02,
      bg: "orange",
    },
    {
      title: "Gold Employer Badge",
      desc: "Earn premium status and get priority access to top workers",
      icon: icon03,
      bg: "green",
    },
    {
      title: "24x7 Support",
      desc: "Round-the-clock support team for any escalations or issues",
      icon: icon04,
      bg: "purple",
    },
  ];

  return (
    <section className="whyChooses">
      <h1 className="whyTitle">Why Employers Trust Zogiraa</h1>

      <div className="whyZogiraas">
        {data.map((item, index) => (
          <div key={index} className="whyZogiraa">
            <div className={`whyIcon ${item.bg}`}>
                 <img src={item.icon} alt={item.title} className="iconImgs" />
            </div>
            <h3 className="cardTitle">{item.title}</h3>
            <p className="cardDesc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyZogiraa;