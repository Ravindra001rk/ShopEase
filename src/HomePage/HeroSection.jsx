import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import ModelImg from "../assets/ModelImg.png";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div className=" md:mt-25 h-[90vh] w-full ">
      <div className="relative">
        <div className="flex absolute md:left-1/2 z-17 top-20 md:-translate-1/2 md:top-80 ">
          <img src={ModelImg} className="md:h-200 h-150 w-full  object-cover" />
        </div>
        <div className="absolute top-70 md:top-0">
          <h1 className="whitespace-nowrap pt-54 text-center font-bold text-white text-[26vw]  md:text-[23vw]">
            Fashion
          </h1>
        </div>
        <div className="flex md:h-full h-[75vh] z-22 justify-between md:flex-row flex-col absolute md:top-5 top-0 w-full">
          <div className="md:w-1/2 w-full md:text-start text-center md:pr-23">
            <h1 className="md:text-7xl text-4xl">Clean Lines.</h1>
            <h1 className="md:text-7xl text-4xl">Conscious Living.</h1>
            <p className="md:mt-12 mt-2 text-center md:text-start justify-self-end italic w-52">
              "Timeless wearable and truely well made."
            </p>
          </div>
          <div className="md:w-1/2 w-full md:pl-30 ">
            <h1 className="md:w-122 font-semibold md:text-start text-center w-full">
              Timesless essential for the modern minimalistic Desing to simplify
              your wardrobe - and elevate you everyday.
            </h1>
            <Link to="/collection" className="">
              <button className="flex cursor-pointer md:mt-8 mt-3 items-center bg-[#6b8272] text-white py-2 px-6 rounded-4xl">
                Explore the Collections <GoArrowUpRight />
              </button>
            </Link>

            <div className="flex items-center md:mt-12 mt-3 justify-end gap-4">
              <div className="w-px h-12 rotate-15 bg-black"></div>
              <div className="flex flex-col justify-end mr-25">
                <div className="flex gap-1">
                  <FaStar color="#6b8272" />
                  <FaStar color="#6b8272" />
                  <FaStar color="#6b8272" />
                  <FaStar color="#6b8272" />
                  <FaStar color="#6b8272" />
                </div>
                <h1 className="mt-1">4.9/450 Review</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
