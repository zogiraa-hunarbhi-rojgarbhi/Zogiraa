import { useState } from "react";
import HeaderEmployee from "./components/HeaderEmployerr";
import HeroSection from "./components/HeroSection";
import HowitWork from "./components/HowItWork";

const Employee = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <HeaderEmployee/>
      <HeroSection/>
      <HowitWork/>
    </>
  );
};

export default Employee;
