import react from "react";
import SuccessStories from "./components/SuccessStories";
import WhyChooseUs from "./components/WhyChooseUs";
import WhyZogiraa from  "./components/WhyZogirra";
import Home from "./components/Home"
import HomeSections from "./components/HomeSections";
import TestimonialVideo from "./components/TestimonialVideo";
export  default function HomePage(){
return(
    <>
<Home />
<HomeSections />
<TestimonialVideo />
<SuccessStories />
<WhyChooseUs />
<WhyZogiraa />
    </>

)
}