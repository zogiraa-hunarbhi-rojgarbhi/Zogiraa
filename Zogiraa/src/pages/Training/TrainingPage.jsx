import "./TrainingPage.css";
import { useRef } from "react";

import HowToRegister from "./sections/HowToRegister";
import Courses from "./sections/courses";
import WhyChooseZogiraa from "./sections/WhyChooseZogiraa";

export default function TrainingPage() {
  const registerRef = useRef(null);
  const coursesRef = useRef(null);
  const whyRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="training-page">
      {/* INTERNAL NAVIGATION */}
      <div className="training-nav">
        <button onClick={() => scrollToSection(registerRef)}>
          How to Register
        </button>
        <button onClick={() => scrollToSection(coursesRef)}>Courses</button>
        <button onClick={() => scrollToSection(whyRef)}>
          Why Choose Zogiraa
        </button>
      </div>

      {/* SECTIONS */}
      <section ref={registerRef} id="how-to-register">
        <HowToRegister />
      </section>

      <section ref={coursesRef} id="courses">
        <Courses />
      </section>

      <section ref={whyRef} id="why-choose-zogiraa">
        <WhyChooseZogiraa />
      </section>
    </div>
  );
}
