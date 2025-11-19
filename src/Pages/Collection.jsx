import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../CollectioPage/Sidebar";
import ProductItem from "../CollectioPage/ProductItem";
import { Context } from "../Context/Context";

const Collection = () => {
  const { products, filteredProducts, setFilteredProducts } =
    useContext(Context);
  const [Product, setProduct] = useState([]);
  const [sortType, setsortType] = useState("relevant");
  useEffect(() => {
    setProduct(products.slice(0, 100));
  }, [products]);

  const sortProduct = () => {
    let fpCopy = [...filteredProducts]; // make a shallow copy
    switch (sortType) {
      case "low-high":
        fpCopy.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        fpCopy.sort((a, b) => b.price - a.price);
        break;
      default:
        return;
    }
    setFilteredProducts(fpCopy); // set after sorting copy
  };

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex  lg:gap-20 ">
      <div className="">
        <Sidebar />
      </div>

      <div className="lg:pl-23 min-h-screen">
        <div className="flex justify-between items-center px-3">
          <h1 className="p-2 text-4xl mb-4">All Collections</h1>
          <div>
            <select
              onChange={(e) => setsortType(e.target.value)}
              className="border-2 p-2 outline-0 border-gray-300"
            >
              <option value="relevant">Sort by:Relavent</option>
              <option value="low-high">Sort by:Low to High</option>
              <option value="high-low">Sort by:High to Low</option>
            </select>
          </div>
        </div>
        <div className="grid lg:grid-cols-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full">
          {products.slice(0, 100).map((items, idx) => (
            <ProductItem
              key={idx}
              name={items.ProductTitle}
              image={items.ImageURL}
              price={items.Price}
              id={items.ProductId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
