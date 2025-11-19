import React, { useContext } from "react";
import { Context } from "../Context/Context";

const Cart = () => {
     const { currency, cart, increment, deletItem, decrement } =
        useContext(Context);
    
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold">My Cart</h1>
          <button className="flex items-center gap-2 text-sm md:text-base text-gray-700 hover:text-gray-900">
            <ArrowLeft size={20} />
            <span className="hidden sm:inline">Continue shopping</span>
          </button>
        </div>

        {/* Table Header - Hidden on mobile */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-4 mb-6 pb-4 border-b text-sm text-gray-500 uppercase">
          <div className="col-span-5">Product</div>
          <div className="col-span-2">Price</div>
          <div className="col-span-2">QTY</div>
          <div className="col-span-2">Total</div>
          <div className="col-span-1"></div>
        </div>

        {/* Cart Items */}
        <div className="space-y-6 mb-8">
          {cart.map((item) => (
            <div key={item.id} className="border-b pb-6 last:border-0">
              {/* Desktop Layout */}
              <div className="hidden lg:grid lg:grid-cols-12 gap-4 items-center">
                <div className="col-span-5 flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded bg-gray-100"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.sku}</p>
                    <p className="text-sm text-gray-600">
                      Color: {item.color} //{" "}
                      <span className="font-medium">Extra:</span> {item.extra}
                    </p>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="text-sm text-gray-500">
                    + {item.extraCost.toFixed(2)}€ {item.extraDesc}
                  </div>
                  <div className="font-semibold text-lg">
                    {item.price.toFixed(2)}€
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="flex items-center gap-3 border rounded-lg px-3 py-2 w-fit">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-8 text-center font-medium">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
                <div className="col-span-2 font-semibold text-lg">
                  {(item.price * item.quantity).toFixed(2)}€
                </div>
                <div className="col-span-1 flex justify-end">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="lg:hidden">
                <div className="flex gap-4 mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded bg-gray-100 "
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-base">{item.name}</h3>
                        <p className="text-xs text-gray-500">{item.sku}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-gray-600 ml-2"
                      >
                        <X size={18} />
                      </button>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      Color: {item.color}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Extra:</span> {item.extra}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-gray-500">
                      + {item.extraCost.toFixed(2)}€ {item.extraDesc}
                    </div>
                    <div className="font-semibold text-lg">
                      {item.price.toFixed(2)}€
                    </div>
                  </div>
                  <div className="flex items-center gap-3 border rounded-lg px-3 py-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-8 text-center font-medium">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <div className="font-semibold text-lg">
                    {(item.price * item.quantity).toFixed(2)}€
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Shipping and Checkout Section */}
        <div className="bg-gray-50 rounded-lg p-6 md:p-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Shipping Options */}
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Choose shipping mode:
              </h2>
              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="shipping"
                    value="pickup"
                    checked={shippingMode === "pickup"}
                    onChange={(e) => setShippingMode(e.target.value)}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">
                        Store pickup ( In 20 min )
                      </span>
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
                    onChange={(e) => setShippingMode(e.target.value)}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">
                        Delivery at home ( Under 2 - 4 day )
                      </span>
                      <span className="font-semibold">• 9.90€</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      At 45 Glenridge Ave. Brooklyn, NY 11220
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 uppercase">Subtotal TTC</span>
                  <span className="font-semibold">{subtotal.toFixed(2)}€</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 uppercase">Shipping</span>
                  <span className="font-semibold">
                    {shipping === 0 ? "Free" : `${shipping.toFixed(2)}€`}
                  </span>
                </div>
                <div className="flex justify-between pt-3 border-t">
                  <span className="text-gray-500 uppercase">Total</span>
                  <span className="font-semibold text-lg">
                    {total.toFixed(2)}€
                  </span>
                </div>
              </div>
              <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-4 px-6 rounded-lg text-lg transition-colors">
                Checkout {total.toFixed(2)} €
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
