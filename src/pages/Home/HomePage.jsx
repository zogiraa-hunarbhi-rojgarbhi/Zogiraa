import react from "react";
import { useOutletContext } from "react-router-dom";
import SuccessStories from "./components/SuccessStories";
import WhyChooseUs from "./components/WhyChooseUs";
import WhyZogiraa from "./components/WhyZogirra";
import Home from "./components/Home"
import HomeSections from "./components/HomeSections";
import TestimonialVideo from "./components/TestimonialVideo";

export default function HomePage() {
    const { openLogin } = useOutletContext();

    return (
        <>
            <Home onLoginClick={openLogin} />
            <HomeSections onLoginClick={openLogin} />
            <TestimonialVideo />
            <SuccessStories />
            <WhyChooseUs />
            <WhyZogiraa />
        </>
    );
}