import { useEffect, useMemo, useRef, useState } from "react";
import "./SuccessStories.css";
import test from "../../../assets/testimonial-01.png";
const allReviews = [
  {
    name: "Rajesh Kumar",
    role: "Electrician",
    text:
      "Through Zogiraa, I've increased my monthly income by 60%. The platform connects me with quality clients who value skilled work.",
    image: test,
  },
  {
    name: "Priyansh Sharma",
    role: "Construction Company Owner",
    text:
      "Finding reliable workers was always a challenge. Zogiraa's verification system gives me confidence in every hire.",
    image: test,
  },
  {
    name: "Kundan Kumar",
    role: "Contractor Businessman",
    text:
      "Having a great experience while selling my goods and products on this having great profit and website is so easy and reliable.",
    image: test,
  },
  {
    name: "Sita Kumari",
    role: "Cleaner",
    text:
      "Best platform for finding daily jobs. No commission charges and verified employers make it trustworthy.",
    image: test,
  },

  {
    name: "Amit Verma",
    role: "Plumber",
    text:
      "Since joining Zogiraa, I’m getting regular plumbing work in my area. Payments are smooth and clients are genuine.",
    image: test,
  },
  {
    name: "Neha Singh",
    role: "Home Tutor",
    text:
      "Zogiraa helped me find students quickly. The platform is easy to use and I got good local leads without any hassle.",
    image: test,
  },
  {
    name: "Rakesh Yadav",
    role: "Painter",
    text:
      "I used to struggle finding consistent work, but now I get painting jobs every week. Very helpful for skilled workers.",
    image: test,
  },
  {
    name: "Anjali Devi",
    role: "Cook",
    text:
      "This is the best app for finding cooking jobs nearby. Verified families and no commission makes it trustworthy.",
    image: test,
  },
];

export default function SuccessStories() {
  const sectionRef = useRef(null);

  const perPage = 4;

  const pages = useMemo(() => {
    const result = [];
    for (let i = 0; i < allReviews.length; i += perPage) {
      result.push(allReviews.slice(i, i + perPage));
    }
    return result;
  }, []);

  const [pageIndex, setPageIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [black, setBlack] = useState(false);
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!started) return;

    let interval;
    let t1, t2, t3;

    const run = () => {
      setVisible(false);
      setBlack(false);
      t1 = setTimeout(() => {
        setVisible(true);
      }, 4000);
      t2 = setTimeout(() => {
        setBlack(true);
      }, 6000);
      t3 = setTimeout(() => {
        setPageIndex((prev) => (prev + 1) % pages.length);
        setVisible(true);
        setBlack(false);
      }, 7000);
    };

    run();
    interval = setInterval(run, 8000);

    return () => {
      clearInterval(interval);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [started, pages.length]);

  return (
    <div className="successStories" ref={sectionRef}>
      <h2 className="successTitle">Success Stories</h2>
      <div className={`storiesWrapper ${visible ? "show" : ""} ${black ? "blackMode" : ""}`}>
        <div className={`blackOverlay ${black ? "active" : ""}`} />

        <div className="storiesGrid">
          {pages[pageIndex].map((r, idx) => (
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

