import "react";
import "./SuccessStories.css";

const allReviews = [
  {
    name: "Rajesh Kumar",
    role: "Electrician",
    text: "Through Zogiraa, I've increased my monthly income by 60%. The platform connects me with quality clients who value skilled work.",
    image: "https://images.pexels.com/photos/1626611/pexels-photo-1626611.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Kundan Kumar",
    role: "Contractor Businessman",
    text: "Having a great experience while selling my goods and products on this having great profit and website is so easy and reliable.",
    image: "https://images.pexels.com/photos/2519332/pexels-photo-2519332.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Sita Kumari",
    role: "Cleaner",
    text: "Best platform for finding daily jobs. No commission charges and verified employers make it trustworthy.",
    image: "https://images.pexels.com/photos/4142228/pexels-photo-4142228.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Amit Verma",
    role: "Plumber",
    text: "Since joining Zogiraa, I'm getting regular plumbing work in my area. Payments are smooth and clients are genuine.",
    image: "https://images.pexels.com/photos/4515287/pexels-photo-4515287.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
  },
];

export default function SuccessStories() {
  return (
    <div className="successStories">
      <h2 className="successTitle">Success Stories</h2>
      <div className="storiesWrapper show">
        <div className="storiesGrid">
          {allReviews.map((r, idx) => (
            <div className="storyCard" key={idx}>
              <div className="storyHeader">
                <img className="storyAvatar" src={r.image} alt={r.name} />
                <div>
                  <div className="storyName">{r.name}</div>
                  <div className="storyRole">{r.role}</div>
                </div>
              </div>
              <p className="storyText">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
