import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Context/Context";
import ProductItem from "../CollectioPage/ProductItem";

const RelatedProduct = ({ Gender }) => {
  const { products } = useContext(Context);
  const [Related, setRelated] = useState([]);

  useEffect(() => {
    let ProductCopy = products.slice();
    ProductCopy = ProductCopy.filter((item) => Gender === item.Gender);
    setRelated(ProductCopy.slice(0, 5));
  }, [products, Gender]);

  return (
    <div className="grid lg:grid-cols-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full">
      {Related.map((items, idx) => (
        <ProductItem
          key={idx}
          name={items.ProductTitle}
          image={items.ImageURL}
          price={items.Price}
          id={items.ProductId}
        />
      ))}
    </div>
  );
};

export default RelatedProduct;
