import React, { useState } from "react";
import "./Hamburger.css";

const categories = [
  "Healthcare",
  "Education",
  "Retail",
  "Banking & Finance",
  "Hospitality",
  "Textile",
  "Crafts",
  "Telecom",
  "Sports & Fitness",
  "Mining",
  "Green Jobs",
  "Power",
  "Media & Entertainment",
  "Logistics",
  "Leather",
  "IT & ITeS",
  "Instruments & Metal",
  "Gem & Jewellery",
  "Furniture",
  "Food Industry",
  "Electronics",
  "Domestic Work",
  "Construction",
  "Beauty & Wellness",
  "Automotive",
  "Aerospace",
  "Agriculture",
];

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="hamburger-btn" onClick={() => setOpen(true)}>
        ☰
      </button>

      {open && (
        <div className="hamburger-overlay" onClick={() => setOpen(false)}>
          <div
            className="hamburger-panel"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="hamburger-header">
              <h4>More Categories</h4>
              <button className="close-btn" onClick={() => setOpen(false)}>
                ✕
              </button>
            </div>

            <ul className="hamburger-list">
              {categories.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Hamburger;
