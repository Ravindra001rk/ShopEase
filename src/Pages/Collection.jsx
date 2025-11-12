import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../CollectioPage/Sidebar";
import ProductItem from "../CollectioPage/ProductItem";
import { Context } from "../Context/Context";

const Collection = () => {
  const { products } = useContext(Context);
  const [Product, setProduct] = useState([]);
  useEffect(() => {
    setProduct(products.slice(0,100));
  }, []);
  return (
    <div className="flex gap-20">
     <div className="lg:block hidden"> 
       <Sidebar />
     </div>
      <div className="lg:pl-23">
        <h1 className="p-2 text-2xl  mb-4">All Collections</h1>
        <div className="grid lg:grid-cols-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full">
          {Product.map((items, idx) => (
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
