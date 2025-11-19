import React, { useContext } from "react";
import { Context } from "../Context/Context";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

const CategorySection = () => {
  const Products = [
    {
      img: "https://i.pinimg.com/736x/44/25/f6/4425f618e8f47486784d5fbcd90271df.jpg",
      name: "Topwear",
      link: "/collection/topwear",
    },
    {
      img: "https://i.pinimg.com/736x/0c/67/75/0c6775fc614417bdf94e29af797d8494.jpg",
      name: "Bottom",
      link: "/collection/bottom",
    },
    {
      img: "https://i.pinimg.com/1200x/b9/b0/68/b9b06884db56abf8cb54a77e7a455cf4.jpg",
      name: "Footwear",
      link: "/collection/footwear",
    },
    {
      img: "https://i.pinimg.com/1200x/bd/0c/67/bd0c674d1b611adb7fd2aa962c023703.jpg",
      name: "Casual",
      link: "/collection/casual",
    },
  ];
  return (
    <div>
      <div className="flex md:flex-row flex-col gap-5 lg:gap-180  pb-25 ">
        <div>
          <h1 className="whitespace-nowrap text-xl font-semibold text-black">
            Explore by Categories.
          </h1>
        </div>
        <div className="">
          <h1 className="font-semibold  md:text-2xl">
            Discover curated pieces designed to elevate everyday elegance.
            Whether you're dressing up, keeping it casual, or making a statement
            — Velora has you covered.
          </h1>
          <hr className="text-[#c0bebe] mt-3" />
          {/* <div className="flex gap-3 flex-wrap justify-between mt-8 font-semibold text-[#5f5f5f]">
            <div>
              <h1 className="text-xl">12000+</h1>
              <h1>Happy customer</h1>
            </div>
            <div>
              <h1 className="text-xl">80%</h1>
              <h1>Customer return rate</h1>
            </div>
            <div>
              <h1 className="text-xl">5000+</h1>
              <h1>Five-star reviews</h1>
            </div>
            <div>
              <h1 className="text-xl">Weekly</h1>
              <h1>New styles Added</h1>
            </div>
          </div> */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 font-semibold text-[#5f5f5f] text-center">
            <div>
              <h1 className="text-xl">12000+</h1>
              <h1>Happy customer</h1>
            </div>
            <div>
              <h1 className="text-xl">80%</h1>
              <h1 className="whitespace-nowrap">Customer return rate</h1>
            </div>
            <div>
              <h1 className="text-xl">5000+</h1>
              <h1>Five-star reviews</h1>
            </div>
            <div>
              <h1 className="text-xl">Weekly</h1>
              <h1>New styles Added</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-9 justify-between pb-45">
        {Products.map((items, idx) => (
          <div key={idx} className=" h-105">
            <Link to={items.link}>
              <img src={items.img} className="object-top h-full w-full" />
              <div className="flex w-full justify-between  py-3 px-1">
                <h1>{items.name}</h1>
                <GoArrowUpRight />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
