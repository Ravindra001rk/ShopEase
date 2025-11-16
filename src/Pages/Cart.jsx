import React, { useContext } from "react";
import { Context } from "../Context/Context";

const Cart = () => {
  const { currency, cart, increment, deletItem, decrement } =
    useContext(Context);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is literally empty.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border p-3 rounded-lg"
            >
              <img
                src={item.ImageURL}
                alt={item.ProductTitle}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex  text-2xl gap-2">
                <button
                  onClick={() => {
                    decrement(item.ProductId);
                  }}
                >
                  -
                </button>
                <button>{item.quantity}</button>
                <button
                  onClick={() => {
                    increment(item.ProductId);
                  }}
                >
                  +
                </button>
                <div onClick={()=>{
                  deletItem(item.ProductId)
                }}>Delete</div>
              </div>
              <div>
                <h2>{item.ProductTitle}</h2>
                <p>
                  {currency}
                  {item.Price}
                </p>
                <p>Qty: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
