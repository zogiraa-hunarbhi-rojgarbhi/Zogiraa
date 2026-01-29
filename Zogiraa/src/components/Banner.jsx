import React from "react";
import "./Banner.css";

export default function Banner() {
  return (
    <div className="banner-box">
      <img className="img-banner" src="/banner-Img.png" loading="lazy" alt="banner" />

      <div className="banner-heading">
        <h2 className="heading-big">
          Want a house full of amazing and unforgettable things?
        </h2>

        <div className="action-buttons">
          <button className="btn-01">Explore more</button>
          <button className="btn-01">Know more</button>
        </div>
      </div>
    </div>
  );
}
