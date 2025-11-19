import React, { useContext, useState } from "react";
import { Context } from "../Context/Context";
import { Link } from "react-router-dom";

const Cart = () => {
  const { currency, cart, increment, deletItem, decrement, placeOrder } =
    useContext(Context);

  const [shippingMode, setShippingMode] = useState("pickup");

  const subtotal = cart.reduce(
    (sum, item) => sum + item.Price * item.quantity,
    0
  );

  const shipping = shippingMode === "pickup" ? 0 : 9.9;

  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow p-6 md:p-10">
        <h1 className="text-3xl font-bold mb-6">My Cart</h1>

        {cart.length === 0 ? (
          <p className="text-gray-600 text-lg">Your cart is empty.</p>
        ) : (
          <div className="flex flex-col gap-6">
            {cart.map((item) => (
              <div
                key={item.ProductId}
                className="border rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="flex gap-4 items-center w-full md:w-auto">
                  <img
                    src={item.ImageURL}
                    alt={item.ProductTitle}
                    className="w-24 h-24 object-cover rounded bg-gray-100"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="font-semibold text-lg">{item.ProductTitle}</h2>
                  <p className="text-gray-600 text-sm">
                    {currency}
                    {item.Price}
                  </p>
                  <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                </div>

                <div className="flex items-center gap-3 border rounded-lg px-3 py-2">
                  <button
                    onClick={() => decrement(item.ProductId)}
                    className="text-lg font-bold"
                  >
                    -
                  </button>

                  <span className="w-8 text-center font-medium">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increment(item.ProductId)}
                    className="text-lg font-bold"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => deletItem(item.ProductId)}
                  className="text-red-500 text-sm hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-gray-50 rounded-lg p-6 mt-10">
        <h2 className="text-xl font-semibold mb-4">Choose shipping mode:</h2>

        <div className="space-y-3 mb-6">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="radio"
              name="shipping"
              value="pickup"
              checked={shippingMode === "pickup"}
              onChange={() => setShippingMode("pickup")}
              className="mt-1"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Store pickup ( In 20 min )</span>
                <span className="text-red-500 font-semibold">• FREE</span>
              </div>
            </div>
          </label>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="radio"
              name="shipping"
              value="delivery"
              checked={shippingMode === "delivery"}
              onChange={() => setShippingMode("delivery")}
              className="mt-1"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-medium">
                  Delivery at home ( Under 2 - 4 day )
                </span>
                <span className="font-semibold">• 9.90€</span>
              </div>
            </div>
          </label>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500 uppercase">Subtotal TTC</span>
            <span className="font-semibold">
              {currency}
              {subtotal}
            </span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-500 uppercase">Shipping</span>
            <span className="font-semibold">
              {shippingMode === "pickup" ? "Free" : "9.90€"}
            </span>
          </div>

          <div className="flex justify-between pt-3 border-t">
            <span className="text-gray-500 uppercase">Total</span>
            <span className="font-semibold text-lg">
              {" "}
              {currency}
              {total.toFixed(2)}
            </span>
          </div>
        </div>

        <Link to="/place-order">
          <button
            onClick={() => {
              placeOrder();
            }}
            className="w-full cursor-pointer bg-red-500 hover:bg-red-600 text-white font-semibold py-4 px-6 rounded-lg text-lg"
          >
            Checkout {currency}
            {total.toFixed(2)}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
