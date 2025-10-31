import React from "react";
import HeroSection from "../sections/Home/Hero";
import HomeAbout from "./HomeAbout";
import HomeChoose from "./HomeChoose";
import HomeService from "./HomeService";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <HomeAbout />
      <HomeChoose />
      <HomeService />
    </div>
  );
};

export default Home;
