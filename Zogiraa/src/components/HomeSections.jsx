import React from "react";
import "./HomeSections.css";

import Mimg from "../assets/Mason.png";
import Pimg from "../assets/plumber.png";
import Simg from "../assets/Security.png";
import Dimg from "../assets/Delivery-Boy.png";

import labour from "../assets/labour.png";
import employee from "../assets/employee.png";
import tools from "../assets/tools.png";
import skill from "../assets/skill.png";

import plumber from "../assets/HPlumber.png";
import HDriver from "../assets/HDriver.png";
import pp from "../assets/pp.png";
import houseclean from "../assets/house-clean.png";

import cement from "../assets/cement.png";
import fevicol from "../assets/Fevicol.png";
import toolset from "../assets/ToolSet.png";
import safety from "../assets/safety.png";
import helper from "../assets/Helper.png";
import welding from "../assets/welding.png";
import carpenter from "../assets/carpenter.png";
import powerTool from "../assets/powerTool.png";

const HomeSections = () => {
  return (
    <div className="home-sections">

      <section className="section section-01">
        <div className="section-inner">
          <h2>Browse by Category</h2>

          <div className="card-row">
            {[
              { title: "Mason", desc: "Skilled masons for construction and repair work", img: Mimg },
              { title: "Plumber", desc: "Expert plumbers for all your plumbing needs", img: Pimg },
              { title: "Security", desc: "Trained security personnel for your safety", img: Simg },
              { title: "Delivery Boy", desc: "Reliable delivery personnel for your business", img: Dimg },
            ].map((item, i) => (
              <div className="category-card" key={i}>
                <img src={item.img} alt={item.title} className="category-img" />
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-change">
        <div className="section-inner">
          <h2>What Are You Looking For?</h2>

          <div className="card-row">
            {[
              { title: "Labour Hiring", price: "Starting ₹750/day", img: labour },
              { title: "Employer Solutions", price: "Custom packages", img: employee },
              { title: "Tools & Equipment", price: "From ₹299/week", img: tools },
              { title: "Skill Training", price: "From ₹2,999", img: skill },
            ].map((item, i) => (
              <div className="info-card" key={i}>
                <img src={item.img} alt={item.title} className="category-img" />
                <h4>{item.title}</h4>
                <p>{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-01">
        <div className="section-inner">
          <div className="section-header">
            <h2>Today's Hot Deals</h2>
          </div>

          <div className="card-row">
            {[
              { title: "Hire Driver", old: "₹599", price: "₹499/day", off: "20% OFF", img: plumber },
              { title: "Hire Plumber", old: "₹899", price: "₹750/day", off: "15% OFF", img: HDriver },
              { title: "Professional Painters", old: "₹1200", price: "₹950/day", off: "25% OFF", img: pp },
              { title: "House Cleaning Service", old: "₹1200", price: "₹899/day", off: "35% OFF", img: houseclean },
            ].map((item, i) => (
              <div className="deal-card" key={i}>
                <span className="badge">{item.off}</span>
                <img src={item.img} alt={item.title} className="category-img" />
                <h4>{item.title}</h4>
                <p className="old-price">{item.old}</p>
                <p className="price">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-change">
        <div className="section-inner">
          <h2>Buy Goods at Great Prices</h2>

          <div className="card-row">
            {[
              { title: "Cement", price: "₹500/bag", img: cement },
              { title: "Fevicol", price: "₹200/pack", img: fevicol },
              { title: "Tool Set", price: "₹700", img: toolset },
              { title: "Safety Helmet", price: "₹150", img: safety },
            ].map((item, i) => (
              <div className="product-card" key={i}>
                <img src={item.img} alt={item.title} className="category-img" />
                <h4>{item.title}</h4>
                <p className="price">{item.price}</p>
                <button>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-01">
        <div className="section-inner">
          <h2>Popular Services & Tools</h2>

          <div className="card-row">
            {[
              { title: "Construction Helpers", reviews: "124 reviews", price: "₹750/day", img: helper },
              { title: "Welding Machine Rental", reviews: "89 reviews", price: "₹1,299/week", img: welding },
              { title: "Skilled Carpenters", reviews: "156 reviews", price: "₹950/day", img: carpenter },
              { title: "Power Tools Bundle", reviews: "156 reviews", price: "₹650/day", img: powerTool },
            ].map((item, i) => (
              <div className="service-card" key={i}>
                <img src={item.img} alt={item.title} className="category-img" />
                <h4>{item.title}</h4>
                <div className="rating">⭐⭐⭐⭐⭐ <span>({item.reviews})</span></div>
                <p className="price">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomeSections;
