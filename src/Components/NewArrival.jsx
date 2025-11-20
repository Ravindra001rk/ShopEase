import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../Context/Context";
import { IoHeart } from "react-icons/io5";
import { Link } from "react-router-dom";

const NewArrival = () => {
  const scrollRef = useRef(null);
  const { products, favItems } = useContext(Context);
  const [Product, setProduct] = useState([]);

  useEffect(() => {
    setProduct(products.slice(0, 7));
  }, [products]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -450, // adjust scroll amount
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 450,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl py-2">New Arrivals</h1>
        <div className="flex gap-1 items-center text-2xl">
          <h1
            className="cursor-pointer border rounded-full px-4 py-1"
            onClick={scrollLeft}
          >
            ←
          </h1>
          <h1
            className="cursor-pointer border rounded-full px-4 py-1"
            onClick={scrollRight}
          >
            →
          </h1>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-hidden flex-nowrap gap-6 scroll-smooth"
      >
        {Product.map((item, idx) => (
          <div key={idx} className="relative shrink-0">
            <div>
              <Link to={`/product/${item.ProductId}`} className="shrink-0">
                <div className="overflow-hidden">
                  <img src={item.ImageURL} className="h-150 transition-all duration-200 hover:scale-105" />
                </div>
              </Link>
              <h1 className="py-3 text-px">{item.ProductTitle}</h1>
              <h1>${item.Price}</h1>
            </div>
            <div className="flex justify-between p-3 absolute top-0 w-full">
              <h1>New</h1>
              <IoHeart
                onClick={() => {
                  favItems({
                    ProductId: item.ProductId,
                    ImageURL: item.ImageURL,
                    ProductTitle: item.ProductTitle,
                    Price: item.Price,
                  });
                }}
                color="orange"
                className="text-2xl cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
