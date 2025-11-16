import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../CollectioPage/Sidebar";
import { Context } from "../Context/Context";
import ProductItem from "../CollectioPage/ProductItem";

const Footwear = () => {
  const { products } = useContext(Context);
  const [Product, setProduct] = useState([]);
  useEffect(() => {
    setProduct(products.slice());
  }, [products]);
  return (
    <div className="flex gap-20 min-h-screen">
      <div className="lg:block hidden">
        <Sidebar />
      </div>
      <div className="lg:pl-23">
        <div className="grid lg:grid-cols-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full">
          {Product.filter((item) => item.Category === "Footwear").map(
            (items, idx) => (
              <ProductItem
                key={idx}
                name={items.ProductTitle}
                image={items.ImageURL}
                price={items.Price}
                id={items.ProductId}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Footwear;
