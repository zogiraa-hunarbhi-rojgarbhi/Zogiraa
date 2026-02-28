import React, { useState } from "react";
import "./TestimonialVideo.css";

import mainThumb from "../../../assets/main-1.png";
import t1 from "../../../assets/test-1.jpg";
import t2 from "../../../assets/test-2.jpg";
import t3 from "../../../assets/test-main.jpg";

import mainVideo from "../../../assets/testimonial-video.mp4";
import raviVideo from "../../../assets/t-1.mp4";
import priyaVideo from "../../../assets/t-2.mp4";
import sitaVideo from "../../../assets/t-3.mp4";

const testimonials = [
  {
    img: t1,
    name: "Sita Devi",
    role: "Sewing Machine Operator",
    location: "Pune",
    text: "Honest platform for workers. Payment always on time.",
    video: raviVideo,
  },
  {
    img: t2,
    name: "Priya Sharma",
    role: "Employer",
    location: "Bangalore",
    text: "Hiring verified workers was never this easy.",
    video: priyaVideo,
  },
  {
    img: t3,
    name: "Ravi Patel",
    role: "Plumber",
    location: "Pune",
    text: "I got work in 2 days after signing up.",
    video: sitaVideo,
  },
];

const TestimonialVideo = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <>
      <section className="testimonial-wrapper">
        <div className="testimonial-top">
          <div className="testimonial-text">
            <h2>
              Hear from the Hands that <br />
              <span>Build Our Nation</span>
            </h2>

            <p>
              Real stories from real workers and employers who found
              success through Zogiraa.
            </p>

            <button
              className="watch-btn"
              onClick={() => setActiveVideo(mainVideo)}
            >
              ▶ Watch Now
            </button>
          </div>

          <div
            className="testimonial-video"
            onClick={() => setActiveVideo(mainVideo)}
          >
            <img src={mainThumb} alt="testimonial" />
            {/* <div className="play-icon">▶</div> */}
          </div>
        </div>

        <div className="testimonial-bottom">
          <h3>Featured Testimonial Videos</h3>
          <p className="subtitle">
            Watch how Zogiraa transformed lives across India
          </p>

          <div className="testimonial-cards">
            {testimonials.map((item, i) => (
              <div className="testimonial-card" key={i}>
                <div
                  className="card-img"
                  onClick={() => setActiveVideo(item.video)}
                >
                  <img src={item.img} alt={item.name} />
                  <span className="small-play">▶</span>
                </div>

                <h4>{item.name}</h4>
                <span className="role">
                  {item.role} · {item.location}
                </span>

                <p className="quote">"{item.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeVideo && (
        <div
          className="video-modal"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setActiveVideo(null)}
            >
              ✕
            </button>

            <video src={activeVideo} controls autoPlay />
          </div>
        </div>
      )}
    </>
  );
};

export default TestimonialVideo;
