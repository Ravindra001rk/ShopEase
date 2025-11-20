import React from "react";
import HeroSection from "../HomePage/HeroSection";
import CategorySection from "../HomePage/CategorySection";
import NewArrival from "../Components/NewArrival";

const Home = () => {
  return (
    <div className="">
      <HeroSection />
      <CategorySection />
      <NewArrival/>
    </div>
  );
};

export default Home;
