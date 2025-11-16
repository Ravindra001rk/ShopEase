import React, { useContext } from "react";
import { Context } from "../Context/Context";
import { IoHeart } from "react-icons/io5";
import { IoBag } from "react-icons/io5";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency, addtoCart, favItems } = useContext(Context);

  return (
    <div>
      <div className="group">
        <div className="relative group cursor-pointer overflow-hidden">
          <Link to={`/product/${id}`}>
            <img
              src={image}
              alt="Product"
              className="w-full hover:scale-115 transition-all duration-400 "
            />
          </Link>

          <div
            onClick={() => {
              favItems({
                ProductId: id,
                ImageURL: image,
                ProductTitle: name,
                Price: price,
              });
            }}
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <IoHeart color="orange" className="text-2xl cursor-pointer" />
          </div>

          <div className="absolute bottom-0 w-full opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <h1
              onClick={() => {
                addtoCart({
                  ProductId: id,
                  ImageURL: image,
                  ProductTitle: name,
                  Price: price,
                });
              }}
              className="flex cursor-pointer justify-center items-center gap-2 bg-orange-400 text-white p-2"
            >
              Add to Cart <IoBag />
            </h1>
          </div>
        </div>
        <div className="p-2 ">
          <h1 className="">{name}</h1>
          <h1 className="text-red-500">
            {currency}
            {price}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
