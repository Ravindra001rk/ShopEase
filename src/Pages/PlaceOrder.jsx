import React, { useContext, useState } from "react";
import {
  CheckCircle,
  Package,
  Truck,
  MapPin,
  Calendar,
  CreditCard,
  ArrowLeft,
} from "lucide-react";
import { Context } from "../Context/Context";
import { Link } from "react-router-dom";

const PlaceOrder = () => {
  const [shippingMode, setShippingMode] = useState("pickup");

  const { order, currency, cart } = useContext(Context);
  const orderDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const estimatedDelivery = new Date(
    Date.now() + 3 * 24 * 60 * 60 * 1000
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const subtotal = order.reduce(
    (sum, item) => sum + Number(item.Price) * item.quantity,
    0
  );

  const shipping = shippingMode === "pickup" ? 0 : 9.9;

  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Success Header */}
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 mb-6 text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle size={64} className="text-green-500" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Order Confirmed!
          </h1>
          <p className="text-gray-600 text-lg mb-4">
            Thank you for your purchase. Your order has been received.
          </p>
          <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
            <span className="text-sm text-gray-600">Order Number:</span>
            <span className="font-bold text-gray-900">ORD-21620324</span>
          </div>
        </div>

        {/* Order Status Timeline */}
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-6">
          <h2 className="text-xl font-semibold mb-6">Order Status</h2>
          <div className="relative">
            <div className="absolute left-4 top-8 bottom-8 w-0.5 bg-gray-200 md:left-6"></div>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="relative flex items-start gap-4">
                <div className="shrink-0 w-8 h-8 md:w-12 md:h-12 bg-green-500 rounded-full flex items-center justify-center z-10">
                  <CheckCircle size={20} className="text-white" />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-semibold text-gray-900">Order Placed</h3>
                  <p className="text-sm text-gray-600">{orderDate}</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-start gap-4">
                <div className="shrink-0 w-8 h-8 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center z-10">
                  <Package size={20} className="text-white" />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-semibold text-gray-900">Processing</h3>
                  <p className="text-sm text-gray-600">
                    We're preparing your order
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-start gap-4">
                <div className="shrink-0 w-8 h-8 md:w-12 md:h-12 bg-gray-300 rounded-full flex items-center justify-center z-10">
                  <Truck size={20} className="text-white" />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-semibold text-gray-500">Shipping</h3>
                  <p className="text-sm text-gray-400">
                    Estimated: {estimatedDelivery}
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex items-start gap-4">
                <div className="shrink-0 w-8 h-8 md:w-12 md:h-12 bg-gray-300 rounded-full flex items-center justify-center z-10">
                  <MapPin size={20} className="text-white" />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-semibold text-gray-500">Delivered</h3>
                  <p className="text-sm text-gray-400">We'll notify you</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Delivery Information */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-2 mb-4">
              <Truck size={20} className="text-gray-700" />
              <h2 className="text-lg font-semibold">Delivery Information</h2>
            </div>
            <div className="space-y-2 text-sm">
              <p className="font-medium text-gray-900">John Doe</p>
              <p className="text-gray-600">45 Glenridge Ave.</p>
              <p className="text-gray-600">Brooklyn, NY 11220</p>
              <p className="text-gray-600">United States</p>
              <p className="text-gray-600 mt-3">Phone: +1 (555) 123-4567</p>
            </div>
          </div>

          {/* Payment Information */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-2 mb-4">
              <CreditCard size={20} className="text-gray-700" />
              <h2 className="text-lg font-semibold">Payment Information</h2>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-gray-600">Payment Method</p>
              <p className="font-medium text-gray-900">
                Credit Card ending in 4242
              </p>
              <p className="text-gray-600 mt-3">Billing Address</p>
              <p className="text-gray-600">Same as delivery address</p>
              <div className="mt-4 pt-4 border-t">
                <p className="text-green-600 font-medium flex items-center gap-2">
                  <CheckCircle size={16} />
                  Payment Successful
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Order Items */}
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-6">
          <h2 className="text-xl font-semibold mb-6">Order Items</h2>
          <div className="space-y-4">
            {order.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 pb-4 border-b last:border-0"
              >
                <img
                  src={item.ImageURL}
                  alt={item.ProductTitle}
                  className="w-20 h-20 object-cover rounded bg-gray-100 shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900">
                    {item.ProductTitle}
                  </h3>
                  <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                  {item.Color && (
                    <p className="text-sm text-gray-600">Color: {item.Color}</p>
                  )}
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">
                    {currency}
                    {(item.Price * item.quantity).toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-600">
                    {currency}
                    {item.Price} each
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-6">
          <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
          <div className="space-y-3">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>
                {currency}
                {subtotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span className="text-green-600 font-medium">Free</span>
            </div>

            <div className="flex justify-between text-xl font-bold text-gray-900 pt-3 border-t">
              <span>Total</span>
              <span>
                {currency}
                {total.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex-1 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-6 rounded-lg transition-colors">
            Track Your Order
          </button>
          <Link to="/collection">
            <button className="flex-1 border-2  border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
              <ArrowLeft size={20} />
              Continue Shopping
            </button>
          </Link>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>A confirmation email has been sent to your email address.</p>
          <p className="mt-2">
            Need help? Contact us at support@example.com or call +1 (555)
            123-4567
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
