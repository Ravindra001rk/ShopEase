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
      <div class="bg-[#f3f6f1] w-full py-20">
        <div class=" mx-auto px-6 lg:px-12">
          <div class="flex flex-col lg:flex-row items-start gap-16">
            <div class="flex-1">
              <h2 class="text-2xl font-semibold">Explore by Categories</h2>
            </div>

            <div class="flex-1 max-w-2xl">
              <p class="text-3xl font-semibold leading-snug">
                Discover curated pieces designed to elevate everyday elegance.
                Whether you’re dressing up, keeping it casual, or making a
                statement — Velora has you covered.
              </p>

              <hr class="border-gray-300 my-10" />

              <div class="grid grid-cols-2 md:grid-cols-4 gap-10">
                <div>
                  <h3 class="text-2xl font-semibold">12,000+</h3>
                  <p class="text-gray-600 text-sm">Happy customers</p>
                </div>

                <div>
                  <h3 class="text-2xl font-semibold">80%</h3>
                  <p class="text-gray-600 text-sm">Customer return rate</p>
                </div>

                <div>
                  <h3 class="text-2xl font-semibold">5000+</h3>
                  <p class="text-gray-600 text-sm">Five-star reviews</p>
                </div>

                <div>
                  <h3 class="text-2xl font-semibold">Weekly</h3>
                  <p class="text-gray-600 text-sm">New styles added</p>
                </div>
              </div>
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
