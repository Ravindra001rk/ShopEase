import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../Context/Context";
import { FaStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import ProductTabs from "../Components/ProductTabs";
import AddToCartButton from "../Components/AddToCartButton";
import RelatedProduct from "../Components/RelatedProduct";

const Product = ({ id, image, name, price }) => {
  const { ProductId } = useParams();
  const { products, currency, addtoCart } = useContext(Context);
  const [ProductData, setProductData] = useState(null);

  const fetchData = () => {
    const found = products.find(
      (item) => item.ProductId.toString() === ProductId.toString()
    );
    if (found) setProductData(found);
  };

  useEffect(() => {
    fetchData();
  }, [ProductId, products]);

  return ProductData ? (
    <div>
      <div className="flex lg:flex-row flex-col gap-6 p-4">
        <div>
          <img src={ProductData.ImageURL} className="h-full lg:w-100" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold">{ProductData.ProductTitle}</h1>
          <div className="flex items-center text-xl mt-3">
            <FaStar color="orange" />
            <FaStar color="orange" />
            <FaStar color="orange" />
            <FaStar color="orange" />
            <FaStar color="orange" />
            <h1>(122)</h1>
          </div>
          <h1 className="mt-4 font-bold text-2xl">
            {currency} {ProductData.Price}
          </h1>
          <h1 className="font-semibold text-px lg:w-2/3 my-4">
            A lightweight, usually knitted, pullover shirt, close-fitting and
            with a round neckline and short sleeves, worn as an undershirt or
            outer garment.
          </h1>
          <div>
            <button
              onClick={() => {
                addtoCart({
                  ProductId: ProductData.ProductId,
                  ImageURL: ProductData.ImageURL,
                  ProductTitle: ProductData.ProductTitle,
                  Price: ProductData.Price,
                });
              }}
              className="cursor-pointer bg-orange-400 text-white py-2 px-10 rounded-sm"
            >
              Add to Cart
            </button>
          </div>
          <hr className="text-[#babcbe] my-15" />

          <div>
            <h3 className="text-gray-400 my-1 mt-3">100% Original product.</h3>
            <h3 className="text-gray-400">
              Cash on delivery is available on this product.
            </h3>
            <h3 className="text-gray-400 my-1">
              Easy return and exchange policy within 7 days.
            </h3>
          </div>
        </div>
      </div>
      <div className="mt-15">
        <ProductTabs />
      </div>
      <RelatedProduct Gender={ProductData.Gender} />
    </div>
  ) : (
    ""
  );
};

export default Product;
