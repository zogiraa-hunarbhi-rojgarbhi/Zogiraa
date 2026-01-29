import react from "react";
import SuccessStories from "../components/SuccessStories";
import WhyChooseUs from "../components/WhyChooseUs";
import WhyZogiraa from  "../components/WhyZogirra";
import About from "../components/About"
import Home from "../components/Home"
import OurStory from "../components/OurStory";
import VissionMission from  "../components/VissionMission";
import HomeSections from "../components/HomeSections";
import TestimonialVideo from "../components/TestimonialVideo";
import Footer from "../components/Footer";
import HeaderSearch from "../components/HeaderSearch";
export  default function HomePage(){
return(
    <>
    <HeaderSearch />
<Home />
<HomeSections />
<TestimonialVideo />
<SuccessStories />
<WhyChooseUs />
<WhyZogiraa />
<Footer />
    </>

)
}