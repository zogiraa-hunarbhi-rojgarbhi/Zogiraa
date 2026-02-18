import React from "react";
import "./KnowledgeHub.css";

export default function Blog() {
  return (
    <>
      <div className="kh-page-header">
        <h2>Blog</h2>
        <p>Articles, updates, and stories from Zogiraa.</p>
      </div>

      <div className="kh-grid">
        <div className="kh-card">
          <h3>Latest Updates</h3>
          <p>Write your blog content here or render from API later.</p>
        </div>

        <div className="kh-card">
          <h3>Success Stories</h3>
          <p>Worker journeys, employer testimonials, and impact highlights.</p>
        </div>
      </div>
    </>
  );
}
