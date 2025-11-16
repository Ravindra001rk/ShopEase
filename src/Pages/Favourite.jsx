import React, { useContext } from "react";
import { Context } from "../Context/Context";
import ProductItem from "../CollectioPage/ProductItem";

const Favourite = () => {
  const { favourite, deletFav } = useContext(Context);

  return (
    <div>
      <h1 className="text-2xl mb-4">Your Favourites</h1>
      {favourite.length === 0 ? (
        <p>Your Favourite is literally empty.</p>
      ) : (
        <div className="grid lg:grid-cols-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full">
          {favourite.map((items, idx) => (
            <div>
              <ProductItem
                key={idx}
                name={items.ProductTitle}
                image={items.ImageURL}
                price={items.Price}
                id={items.ProductId}
              />
              <h1
                className="text-2xl cursor-pointer"
                onClick={() => {
                  deletFav(items.ProductId);
                }}
              >
                Delete
              </h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourite;
